"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import {
  base,
  sepolia,
  polygon,
  lisk,
  mainnet,
  zksyncSepoliaTestnet,
  liskSepolia,
} from "viem/chains";
//import { defaultConfig } from 'next/dist/server/config-shared';


export const config = getDefaultConfig({
  appName: "Secure_Data",
  projectId: "982f175981feaa4270a11ee31a1231d6",
  chains: [
    mainnet,
    polygon,
    base,
    lisk,
    zksyncSepoliaTestnet,
    liskSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS == "true" ? [sepolia] : []),
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
