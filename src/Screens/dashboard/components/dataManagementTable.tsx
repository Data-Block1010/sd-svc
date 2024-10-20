"use client";

import { useMemo, useState } from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import Image from "next/image";
import { file, filePdf, getMB } from "@/src/lib/types/constant";
import { Edit2, Eye, Trash } from "iconsax-react";
import {
  useGetUserDataHashes,
  useGetUserDetails,
} from "@/src/hooks/userHook/useUser";
import { toast } from "sonner";
import {
  useDeleteDataMutation,
  useUpdateDataMutation,
  useViewDataMutation,
} from "@/src/hooks/dataManagement/dataManagement";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import Spinner from "@/src/components/reuseables/Spinner";
import LoadingModal from "@/src/components/reuseables/LoadingModal";

export type Payment = {
  id: string;
  name?: string;
  size?: number;
  uploaded?: Date;
  updatedAt?: Date;
  uploadedBy?: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export interface DataRecord {
  dataHash: string;
  filename: string;
  encryptedSecret: string;
  createdAt: string;
}

export function DataTableDemo({
  userHashes,
  getHash,
  hideFooter,
}: {
  userHashes: DataRecord[];
  hideFooter?: boolean;
  getHash: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) {
  const { mutateAsync: deleteData, isPending: deleting } =
    useDeleteDataMutation();

  const columns = useMemo<ColumnDef<DataRecord>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "filename",
        header: "File Name",
        cell: ({ row }) => (
          <div className="capitalize flex items-center gap-3">
            <Image src={file} alt="file" width={30} height={30} />
            <div className="w-[150px] overflow-hidden">
              <p className="text-sm text-secondary">
                {row.getValue("filename")}
              </p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "dataHash",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="pl-0 font-normal text-sm"
            >
              Data Hash
              <CaretSortIcon className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div
            className="text-sm text-secondary w-[150px] overflow-hidden cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(row.getValue("filename"));
              toast.success(`Hash Copied`);
            }}
          >
            {String(row.original.encryptedSecret).substring(0, 4) + "xxxxxxxxx"}
          </div>
        ),
      },
      {
        accessorKey: "encryptedSecret",
        header: () => <div className="text-left">Encryption key</div>,
        cell: ({ row }) => (
          <div
            className="text-sm text-secondary w-[150px] shrink-0 cursor-pointer overflow-hidden"
            onClick={() => {
              navigator.clipboard.writeText(row.original.encryptedSecret);
              toast.success(`Encryption secret Copied`);
            }}
          >
            {row.original.encryptedSecret}
          </div>
        ),
      },
      {
        accessorKey: "createdAt",
        header: () => <div className="text-left">Date</div>,
        cell: ({ row }) => (
          <div className="text-sm text-secondary">
            {row?.original?.createdAt
              ? new Date(row.original.createdAt).toDateString().slice(0, 16)
              : ""}
          </div>
        ),
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const payment = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-3">
                  <Edit2 size={18} color={"#000"} />{" "}
                  <p className="text-sm">Edit</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-3"
                  onClick={() =>
                    deleteData({ cid: payment.dataHash }).then(() => getHash())
                  }
                >
                  <Trash size={18} color={"#000"} />{" "}
                  {deleting ? <Spinner /> : <p className="text-sm">Delete</p>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-3"
                  // onClick={() =>
                  //   viewingAsync({
                  //     file: payment.filename,
                  //     secret: payment.encryptedSecret,
                  //   })
                  // }
                >
                  <Eye size={18} /> <p className="text-sm">View details</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: userHashes ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnVisibility,
    },
  });

  return (
    <div className="w-full">
      <div className="">
        <Table>
          <TableHeader>
            {table
              .getHeaderGroups()
              .reverse()
              .map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="font-normal text-sm"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {!hideFooter && (
        <div className="flex items-center justify-end space-x-2 p-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      <LoadingModal
        text="Deleting File..."
        isOpen={deleting}
        onClose={() => {}}
      />
    </div>
  );
}

export interface DataRecord {
  dataHash: string;
  filename: string;
  encryptedSecret: string;
  createdAt: string;
}
