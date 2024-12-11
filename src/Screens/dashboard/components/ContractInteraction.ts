import Web3 from "web3";
import { ZKsyncPlugin } from "web3-plugin-zksync";
import * as dotenv from "dotenv";
import DataStorage from "./DataStorage.json";

// Load environment variables from .env file
dotenv.config();

const web3 = new Web3(
  process.env.SEPOLIA_RPC_URL || "https://rpc.sepolia-api.lisk.com"
);

const zksyncRpcUrl =
  process.env.ZKSYNC_RPC_URL || "https://sepolia.era.zksync.dev";
console.log(`📞 Connecting to zkSync Era [${zksyncRpcUrl}]`);

// Register zkSync plugin
web3.registerPlugin(new ZKsyncPlugin(zksyncRpcUrl));

export class ZkSyncService {
  private web3: Web3;
  private contractAddress: string;
  private contractAbi: any;
  private privateKey: string;
  private hardcodedFromAddress: string;

  constructor() {
    this.web3 = web3;
    this.contractAddress = process.env.YOUR_CONTRACT_ADDRESS || "";
    this.contractAbi = DataStorage.abi;
    this.privateKey = process.env.ACCOUNT_PRIVATE_KEY || "";
    this.hardcodedFromAddress =
      process.env.HARDCODED_FROM_ADDRESS || "0xYourHardcodedAddress";
  }

  // Method for getting user balance
  public async getBalance(address: string): Promise<string> {
    const balance = await this.web3.eth.getBalance(address);
    return this.web3.utils.fromWei(balance, "ether");
  }

  // Method for backend to send transactions with the hardcoded from address
  public async sendTransaction(to: string, value: string): Promise<any> {
    const tx = {
      from: this.hardcodedFromAddress,
      to,
      value: this.web3.utils.toWei(value, "ether"),
      gas: 21000,
    };

    const signedTx = await this.web3.eth.accounts.signTransaction(
      tx,
      this.privateKey
    );
    const receipt = await this.web3.eth.sendSignedTransaction(
      signedTx.rawTransaction as string
    );

    return receipt.transactionHash;
  }

  // Method for backend to interact with contracts
  public async callContractMethod(
    contractAddress: string,
    abi: any,
    method: string,
    args: any[]
  ): Promise<any> {
    const contract = new this.web3.eth.Contract(abi, contractAddress);
    return contract.methods[method](...args).call();
  }

  // Method for backend to send contract transaction with hardcoded from address
  public async sendContractTransaction(
    contractAddress: string,
    abi: any,
    method: string,
    args: any[]
  ): Promise<any> {
    const contract = new this.web3.eth.Contract(abi, contractAddress);
    const data = contract.methods[method](...args).encodeABI();

    const tx = {
      from: this.hardcodedFromAddress, // Hardcoded address used here
      to: contractAddress,
      data,
      gas: 2000000,
    };

    const signedTx = await this.web3.eth.accounts.signTransaction(
      tx,
      this.privateKey
    );
    const receipt = await this.web3.eth.sendSignedTransaction(
      signedTx.rawTransaction as string
    );

    return receipt.transactionHash;
  }

  // Method for user-signed transaction submission
  public async submitSignedTransaction(signedTx: string): Promise<any> {
    try {
      // Send the signed transaction to the network
      const receipt = await this.web3.eth.sendSignedTransaction(signedTx);
      console.log("Transaction receipt:", receipt);

      return receipt.transactionHash;
    } catch (error) {
      console.error("Error submitting signed transaction:", error);
      throw error;
    }
  }

  // Contract interaction methods for backend

  // Store data on the blockchain
  public async storeData(dataHash: string): Promise<string> {
    return this.sendContractTransaction(
      this.contractAddress,
      this.contractAbi,
      "storeData",
      [dataHash]
    );
  }

  // Update existing data on the blockchain
  public async updateData(newDataHash: string): Promise<string> {
    return this.sendContractTransaction(
      this.contractAddress,
      this.contractAbi,
      "updateData",
      [newDataHash]
    );
  }

  // Delete data on the blockchain
  public async deleteData(nullHash: string): Promise<string> {
    return this.sendContractTransaction(
      this.contractAddress,
      this.contractAbi,
      "deleteData",
      [nullHash]
    );
  }

  // Grant access to another user
  public async grantAccess(userAddress: string, role: number): Promise<string> {
    return this.sendContractTransaction(
      this.contractAddress,
      this.contractAbi,
      "grantAccess",
      [userAddress, role]
    );
  }

  // Revoke access from a user
  public async revokeAccess(userAddress: string): Promise<string> {
    return this.sendContractTransaction(
      this.contractAddress,
      this.contractAbi,
      "revokeAccess",
      [userAddress]
    );
  }
  public async getData(ownerAddress: string): Promise<any> {
    const contract = new this.web3.eth.Contract(
      this.contractAbi,
      this.contractAddress
    );
    try {
      // Call the 'getData' method on the contract
      const dataHash = await contract.methods.getData(ownerAddress).call();
      console.log("Data retrieved from blockchain:", dataHash);
      return dataHash;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw new Error("Failed to retrieve data from blockchain.");
    }
  }
}
