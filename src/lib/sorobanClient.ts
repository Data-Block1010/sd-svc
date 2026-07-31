import {
  Contract,
  TransactionBuilder,
  nativeToScVal,
  scValToNative,
  rpc,
} from "@stellar/stellar-sdk";
import { signTransaction } from "@stellar/freighter-api";
import {
  CONTRACT_ID,
  SOROBAN_RPC_URL,
  STELLAR_NETWORK_PASSPHRASE,
} from "@/config/stellarConfig";

const BASE_FEE = "1000000";

function addr(value: string) {
  return nativeToScVal(value, { type: "address" });
}

function str(value: string) {
  return nativeToScVal(value, { type: "string" });
}

// Browser counterpart to backendnew's sorobanService.invoke(): builds and
// simulates the same way, but signs with the connected Freighter wallet
// instead of a custodial secret key.
async function invoke(method: string, args: any[], sourceAddress: string): Promise<string> {
  const server = new rpc.Server(SOROBAN_RPC_URL);
  const contract = new Contract(CONTRACT_ID);

  const account = await server.getAccount(sourceAddress);
  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: STELLAR_NETWORK_PASSPHRASE,
  })
    .addOperation(contract.call(method, ...args))
    .setTimeout(30)
    .build();

  const prepared = await server.prepareTransaction(tx);

  const signResult = await signTransaction(prepared.toXDR(), {
    networkPassphrase: STELLAR_NETWORK_PASSPHRASE,
    address: sourceAddress,
  });
  if (signResult.error) {
    throw new Error(String(signResult.error));
  }

  const signedTx = TransactionBuilder.fromXDR(
    signResult.signedTxXdr,
    STELLAR_NETWORK_PASSPHRASE
  );

  const sendResult = await server.sendTransaction(signedTx as any);
  if (sendResult.status === "ERROR") {
    throw new Error(`Soroban transaction submission failed: ${JSON.stringify(sendResult.errorResult)}`);
  }

  let getResult = await server.getTransaction(sendResult.hash);
  while (getResult.status === rpc.Api.GetTransactionStatus.NOT_FOUND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    getResult = await server.getTransaction(sendResult.hash);
  }

  if (getResult.status !== rpc.Api.GetTransactionStatus.SUCCESS) {
    throw new Error(`Soroban transaction failed: ${JSON.stringify(getResult)}`);
  }

  return sendResult.hash;
}

async function simulate(method: string, args: any[], sourceAddress: string): Promise<any> {
  const server = new rpc.Server(SOROBAN_RPC_URL);
  const contract = new Contract(CONTRACT_ID);

  const account = await server.getAccount(sourceAddress);
  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: STELLAR_NETWORK_PASSPHRASE,
  })
    .addOperation(contract.call(method, ...args))
    .setTimeout(30)
    .build();

  const sim = await server.simulateTransaction(tx);
  if (rpc.Api.isSimulationError(sim)) {
    throw new Error(`Soroban simulation failed: ${sim.error}`);
  }
  const result = (sim as rpc.Api.SimulateTransactionSuccessResponse).result;
  return result?.retval ? scValToNative(result.retval) : undefined;
}

// Store `dataHash` on-chain for `owner`, signed by the owner's own connected
// Freighter wallet — the client-signed counterpart to backendnew's custodial
// sorobanService.storeData().
export async function storeDataOnChain(owner: string, dataHash: string): Promise<string> {
  return invoke("store_data", [addr(owner), str(dataHash)], owner);
}

export async function updateDataOnChain(owner: string, dataHash: string): Promise<string> {
  return invoke("update_data", [addr(owner), str(dataHash)], owner);
}

export async function getDataOnChain(owner: string, caller: string = owner): Promise<string> {
  return simulate("get_data", [addr(caller), addr(owner)], caller);
}

export async function grantAccessOnChain(owner: string, userAddress: string): Promise<string> {
  return invoke("grant_access", [addr(owner), addr(userAddress)], owner);
}

export async function revokeAccessOnChain(owner: string, userAddress: string): Promise<string> {
  return invoke("revoke_access", [addr(owner), addr(userAddress)], owner);
}
