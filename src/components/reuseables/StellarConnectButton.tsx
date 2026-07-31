"use client";

import { useStellarWallet } from "@/config/StellarWalletProvider";
import { Button } from "../ui/button";

function truncateAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

// Stellar/Freighter equivalent of RainbowKit's <ConnectButton />.
export function StellarConnectButton() {
  const { address, isConnecting, connect, disconnect } = useStellarWallet();

  if (!address) {
    return (
      <Button onClick={() => connect()} disabled={isConnecting}>
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={() => disconnect()}>
      {truncateAddress(address)}
    </Button>
  );
}
