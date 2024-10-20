"use client";
import { Button } from "@/src/components/ui/button";
import { useGetUserDataHashes } from "@/src/hooks/userHook/useUser";
import React, { useMemo } from "react";
import { useAccount } from "wagmi";
import dynamic from "next/dynamic";

const DataTable = dynamic(
  () =>
    import("../components/dataManagementTable").then(
      (mod) => mod.DataTableDemo
    ),
  {
    ssr: false,
  }
);

function OverViewScreen() {
  const { address } = useAccount();
  const { data: userHashes, refetch: getHash } = useGetUserDataHashes();

  const formattedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(38, 42)}`;
  }, [address]);

  return (
    <div>
      <h1 className="text-lg md:text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 md:mt-11">
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-md p-5 col-span-2 md:col-span-1 flex items-end gap-3">
            <div className="w-10/12">
              <h5 className="text-neutral-400 text-sm md:text-sm font-inter">
                Wallet address
              </h5>
              <h3 className="md:text-xl xl:text-2xl font-semibold font-inter">
                {formattedAddress}
              </h3>
            </div>
            <Button
              className="hover:bg-primary hover:text-white hover:border-primary border-neutral-300"
              variant={"outline"}
            >
              Copy
            </Button>
          </div>
          <div className="border rounded-md p-5 col-span-2 md:col-span-1 flex items-start justify-end gap-0 flex-col">
            <h5 className="text-neutral-400 !text-sm font-inter">
              KYC Verification Status
            </h5>
            <div className="bg-green-100 rounded-full text-green-800 text-xs font-inter w-min px-3 py-1 mt-3 md:mt-[18px]">
              Verified
            </div>
          </div>
        </div>
      </div>
      <div className="border border-neutral-300 rounded-lg w-full mt-8">
        <div className="px-6 py-5 border-b">
          <p className="font-semibold text-sm">Recent activity</p>
        </div>
        <DataTable userHashes={userHashes} getHash={getHash} hideFooter />
      </div>
    </div>
  );
}

export default OverViewScreen;
