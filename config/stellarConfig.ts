import { Networks } from "@stellar/stellar-sdk";

// Stellar/Soroban equivalent of the old rainbowKitConfig.ts chain list.
// SecureData runs against a single Soroban contract on one network rather
// than a set of EVM chains, so this is just the network + contract config
// the rest of the app reads from.
export const STELLAR_NETWORK_PASSPHRASE =
  process.env.NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET;

export const SOROBAN_RPC_URL =
  process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || "https://soroban-testnet.stellar.org";

export const CONTRACT_ID = process.env.NEXT_PUBLIC_CONTRACT_ID || "";
