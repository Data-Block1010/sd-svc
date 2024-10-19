import { Button } from "@/src/components/ui/button";
import { Download, QrCode } from "lucide-react";
import React from "react";

function GenerateZkProofScreen() {
  return (
    <div className="px-5">
      <div className="">
        <h1 className="text-xl font-bold ">
          Generate Zero-Knowledge Proof (ZKP)
        </h1>
        <p className="mt-5 text-gray-600 font-normal">
          A Zero-Knowledge Proof (ZKP) allows you to prove your KYC status
          without revealing your personal information. It ensures privacy <br />
          and security in verification processes
        </p>
      </div>

      <div className="flex space-x-5 mt-5">
        <Button className="w-[169px] h-[60px]">Generate ZKP</Button>
        <Button className="w-[208px] h-[60px] bg-white text-gray-500 border-gray-300 border space-x-5">
          <h1 className="text-lg">Download ZKP</h1>{" "}
          <Download className="w-6 h-6 shrink-0" />
        </Button>
      </div>
      <div className="mt-5">
        <p className="text-gray-600">
          Your Zero-Knowledge Proof has been successfully generated. Click the
          button above to download.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold">Your Privacy is Important</h1>
        <p className="mt-5 text-gray-600 font-normal">
          This ZKP allows you to prove your identity without sharing any
          sensitive personal details. <br />
          You can use this ZKP proof to verify your KYC status with third-party
          services without revealing personal information
        </p>
      </div>
      <div className="mt-5">
        <Button className="px-6 h-[60px] bg-white text-[#15A588] border-[#15A588] border space-x-5">
          <h1>Generate QR code</h1>{" "}
          <QrCode className="h-10 w-10 text-[#15A588]" />
        </Button>
      </div>
    </div>
  );
}

export default GenerateZkProofScreen;
