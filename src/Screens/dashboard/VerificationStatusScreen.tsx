"use client";
import { Button } from "@/src/components/ui/button";
import { useGetUserDataHashes } from "@/src/hooks/userHook/useUser";
import React from "react";
import { useAccount } from "wagmi";

import dynamic from "next/dynamic";

const DataTable = dynamic(
  () =>
    import("./components/dataVerificationTable").then(
      (mod) => mod.DataTableDemo
    ),
  {
    ssr: false,
  }
);

function VerificationStatusScreen() {
  const { address } = useAccount();
  const { data: userHashes, refetch: getHash } = useGetUserDataHashes();

  return (
    <div>
      <h1 className="text-2xl font-bold">Verification Status</h1>
      <div className="mt-11">
        <div className="border rounded-md grid grid-cols-2 p-2">
          <div className=" p-2 flex flex-col">
            <h5 className="text-neutral-400 !text-sm font-inter">
              KYC Verification Status
            </h5>
            <div className="bg-green-100 border border-green-300 rounded-full text-green-800 text-xs font-inter w-min px-3 py-1 mt-[5px]">
              Verified
            </div>
          </div>
          <div className="rounded-md p-2 flex flex-col">
            <h5 className="text-neutral-400 !text-sm font-inter">
              Date of Submission
            </h5>
            <div className="border border-neutral-300 rounded-lg text-green-800 text-xs font-inter w-max px-3 py-1 mt-[5px]">
              October 10th 2024
            </div>
          </div>
        </div>
      </div>
      <div className="border border-neutral-300 rounded-lg w-full mt-8">
        <div className="px-6 py-5 border-b">
          <p className="font-semibold text-sm">Verification History</p>
        </div>
        <DataTable />
      </div>
    </div>
  );
}

export default VerificationStatusScreen;
