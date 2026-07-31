"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getAddress,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";

const STORAGE_KEY = "guardzero_stellar_address";

interface StellarWalletContextValue {
  address: string | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const StellarWalletContext = createContext<StellarWalletContextValue>({
  address: null,
  isConnecting: false,
  connect: async () => {},
  disconnect: () => {},
});

// Soroban/Freighter equivalent of wagmi's WagmiProvider + RainbowKitProvider:
// tracks the connected Stellar public key instead of an Ethereum address.
export function StellarWalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    (async () => {
      const connected = await isConnected();
      if (!connected.error && connected.isConnected) {
        const result = await getAddress();
        if (!result.error && result.address) {
          setAddress(result.address);
          return;
        }
      }
      window.localStorage.removeItem(STORAGE_KEY);
    })();
  }, []);

  const connect = useCallback(async () => {
    setIsConnecting(true);
    try {
      const connected = await isConnected();
      if (connected.error || !connected.isConnected) {
        throw new Error("Freighter wallet is not installed.");
      }

      const result = await requestAccess();
      if (result.error) {
        throw new Error(String(result.error));
      }

      setAddress(result.address);
      window.localStorage.setItem(STORAGE_KEY, result.address);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <StellarWalletContext.Provider
      value={{ address, isConnecting, connect, disconnect }}
    >
      {children}
    </StellarWalletContext.Provider>
  );
}

export const useStellarWallet = () => useContext(StellarWalletContext);
