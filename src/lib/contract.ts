import { CONTRACT_ID } from "@/config/stellarConfig";

// Soroban equivalent of the old EVM address/ABI pair: just a contract ID,
// since the interface is defined by the Rust contract, not a JSON ABI.
export const DataStorageContract = {
  contractId: CONTRACT_ID,
};
