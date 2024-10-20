"use client";
import { Button } from "@/src/components/ui/button";
import { file, getKB, getMB, uploadedFileObj } from "@/src/lib/types/constant";
import { uploadedFile } from "@/src/lib/types/dashboard.types";
import { Trash } from "iconsax-react";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DataTableDemo } from "./dataManagementTable";
import { useGetSecret } from "@/src/hooks/generateSecret/generateSecret";
import {
  useDeleteDataMutation,
  useStoreDataMutation,
} from "@/src/hooks/dataManagement/dataManagement";
import { useStoreOnBlockchainMutation } from "@/src/hooks/blockchain/useBlockchain";
import Spinner from "@/src/components/reuseables/Spinner";
import Web3 from "web3";
import { useGetUserDataHashes } from "@/src/hooks/userHook/useUser";
import { useWriteContract } from "wagmi";
import { abi } from "@/src/contract/DataStorage2.json";
import { DataStorageContract } from "@/src/lib/contract";

declare global {
  interface Window {
    ethereum?: any;
  }
}

function DataManagementUpload() {
  const {
    writeContract,
    writeContractAsync,
    data: storedData,
    isSuccess,
    isPending: blocking,
  } = useWriteContract();

  const { data: userHashes, refetch: getHash } = useGetUserDataHashes();
  const { mutateAsync: deleteData } = useDeleteDataMutation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const {
    mutateAsync: storeOnBlockAsync,
    // isPending: blocking,
    // isError: isBlockError,
    // error: blockError,
  } = useStoreOnBlockchainMutation();

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Get the current account
          // const accounts = await web3Instance.eth.getAccounts();
          // setAccount(accounts[0]);

          // Listen for account changes
          // window.ethereum.on("accountsChanged", (accounts: string[]) => {
          //   setAccount(accounts[0]);
          // });
        } catch (error) {
          console.error("Failed to initialize Web3", error);
        }
      } else {
        console.error("MetaMask is not installed.");
      }
    };

    initializeWeb3();

    // Cleanup listener on component unmount
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", setAccount);
      }
    };
  }, []);

  const { refetch, data, isFetching, isError, error, isLoading } =
    useGetSecret(isEnabled);
  const { mutateAsync, isPending } = useStoreDataMutation();

  const [uploadedFiles, setUploadedFiles] = useState<uploadedFile[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      setIsEnabled(true);
      refetch().then((res) => {
        const file = acceptedFiles[0];
        setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
        if (res?.data) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("secretKey", res.data.secretKey);

          // @ts-ignore
          mutateAsync(formData).then((res) => {
            if (res?.txHash && web3) {
              console.log(res);
              writeContractAsync({
                abi,
                // @ts-ignore
                address: DataStorageContract.address,
                functionName: "storeData",
                args: [res?.txHash],
              })
                .then((res) => {
                  getHash().then((res) => {
                    setUploadedFiles([]);
                  });
                })
                .catch((err) => {
                  console.log(err);
                  deleteData({ cid: res.dataHash }).then((res) =>
                    getHash().then((res) => {
                      setUploadedFiles([]);
                    })
                  );
                });
            }
          });
        }
      });
      // @ts-ignore
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    },
  });

  return (
    <>
      <div
        className="border-2 rounded-lg px-6 py-4 w-full border-primary relative mt-2.5"
        {...getRootProps()}
      >
        <input
          type="file"
          className="absolute opacity-0 h-full w-full"
          {...getInputProps()}
        />
        <div className="flex items-center flex-col">
          <div className="border rounded-lg flex items-center justify-center p-2.5 shadow-sm shrink-0">
            <UploadCloud size={16.5} color="#475467" />
          </div>
          <div className="mt-3">
            <h2 className="text-primary font-semibold text-sm text-center">
              Click to upload{" "}
              <span className="text-secondary font-normal ">
                or drag and drop
              </span>
            </h2>
            <p className="text-secondary text-xs font-normal mt-1 text-center">
              Supported files: Word, PDF, CSV or Excel
            </p>
          </div>
        </div>
      </div>
      {uploadedFiles.length > 0 && (
        <>
          <div className="mt-4 space-y-4 w-full md:w-8/12 md:mx-auto">
            {uploadedFiles.map((_file, _index) => (
              <div
                key={_index}
                className="border flex gap-x-4 rounded-lg px-6 py-4 border-neutral-300"
              >
                <Image
                  //   @ts-ignore
                  src={uploadedFileObj[_file.type] || file}
                  alt="file"
                  width={40}
                  height={40}
                />
                <div className="w-11/12">
                  <p className="text-sm text-secondary">{_file.name}</p>
                  <p className="text-xs text-secondary/90">
                    {_file.size > 200000
                      ? `${getMB(_file)} MB`
                      : `${getKB(_file)} KB`}
                  </p>
                  {/* <Progress value={33} className="h-2 mt-1.5" /> */}
                </div>
                {isFetching || isLoading || isPending || blocking ? (
                  <Spinner className="w-4 h-4" />
                ) : (
                  <Button
                    variant={"ghost"}
                    className=""
                    onClick={() => {
                      setUploadedFiles(
                        uploadedFiles.filter(
                          (_file, _index2) => _index2 !== _index
                        )
                      );
                    }}
                  >
                    <Trash size="24" color="#000" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center">
            <Button className="h-12 w-full md:w-8/12 md:mx-auto mt-6">
              Submit
            </Button>
          </div> */}
        </>
      )}
      {uploadedFiles.length === 0 && (
        <>
          <div className="border border-neutral-300 rounded-lg w-full mt-8">
            <div className="px-6 py-5 border-b">
              <p>File Uploaded</p>
            </div>
            <DataTableDemo userHashes={userHashes} getHash={getHash} />
          </div>
        </>
      )}
    </>
  );
}

export default DataManagementUpload;
