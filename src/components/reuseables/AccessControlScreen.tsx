import React from 'react'
import { Form } from 'react-hook-form';
import { CiMail } from "react-icons/ci";
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/components/ui/table"





function AccessControl() {
    const data = [
        {
            address: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
            permission: "verification permission",
            status: "delete",
        },
        {
            address: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
            permission: "verification permission",
            status: "delete"
        },
        {
            address: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
            permission: "verification permission",
            status: "delete"

        },
        {
            address: "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
            permission: "verification permission",
            status: "delete"

        },
        {
            address: "0x583031D1113aD414F02576BD6afaBfb302140225",
            permission: "verification permission",
            status: "delete"
        },
        {
            address: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
            permission: "verification permission",
            status: "delete"

        }
    ]
    return (
        <div className='mb-10 '>
            <div className='mt-8'>
                <h1 className='font-bold text-2xl '>Access Control</h1>
                <p className='text-[#475467] mt-4'>Add authorized users</p>
            </div>
            <div className='flex justify-between mt-5'>

                <div>
                    <h1 className='text-gray-700'>Add Users</h1>
                </div>

                <div>
                    <div className='flex justify-between'>
                        <div className='space-y-5 gap-5'>
                            <Input placeholder='Input Address' className='w-[698px]' />
                            {/* <Input placeholder='Input Address' /> */}
                            {/* <Input placeholder='Input Address' /> */}
                        </div>
                        <div className='gap-5 h-12 ml-5 space-y-5 my-auto '>
                            {/* <Select>
                               
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select> */}
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Read Only" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Read-Only</SelectItem>
                                    <SelectItem value="dark">Verification Permission</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div>
                            <Button variant="ghost" className='text-gray-700 text-sm'>+Add User</Button>
                        </div>
                        <div>
                            <Button className='text-sm gap-2'> <CiMail className='font-bold' /> Send Invites</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-5'>

                <div>
                    <h1 className='text-gray-700'>Add Users</h1>
                </div>

                <div>
                    <Table className='w-[904px]'>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className=''>
                            <TableRow>
                                {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
                                <TableHead>User Address</TableHead>
                                <TableHead>Permissions</TableHead>
                                {/* <TableHead className="text-right">Amount</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                {/* <TableCell className="font-medium">INV001</TableCell> */}
                                {/* <TableCell>Paid</TableCell> */}
                                {/* <TableCell>Credit Card</TableCell> */}
                                <TableCell className="text-left">0x5B38Da6a701c568545dCfcB03FcB875f56beddC4</TableCell>
                                <TableCell className="text-left">verification permissions</TableCell>
                                <TableCell className="text-left flex gap-3"><div>Delete</div><div><a href="" className='text-[#15A588]'>Edit</a></div></TableCell>


                            </TableRow>
                        </TableBody>
                        <TableBody>
                            <TableRow>
                                {/* <TableCell className="font-medium">INV001</TableCell> */}
                                {/* <TableCell>Paid</TableCell> */}
                                {/* <TableCell>Credit Card</TableCell> */}
                                <TableCell className="text-left">0x583031D1113aD414F02576BD6afaBfb302140225</TableCell>
                                <TableCell className="text-left">verification permission</TableCell>
                                <TableCell className="text-left flex gap-3"><div>Delete</div><div><a href="" className='text-[#15A588]'>Edit</a></div></TableCell>


                            </TableRow>
                        </TableBody>
                        <TableBody>
                            <TableRow>
                                {/* <TableCell className="font-medium">INV001</TableCell> */}
                                {/* <TableCell>Paid</TableCell> */}
                                {/* <TableCell>Credit Card</TableCell> */}
                                <TableCell className="text-left">0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678</TableCell>
                                <TableCell className="text-left">Read-only</TableCell>
                                <TableCell className="text-left flex gap-3"><div>Delete</div><div><a href="" className='text-[#15A588]'>Edit</a></div></TableCell>


                            </TableRow>
                        </TableBody>

                        <TableBody>
                            <TableRow>
                                {/* <TableCell className="font-medium">INV001</TableCell> */}
                                {/* <TableCell>Paid</TableCell> */}
                                {/* <TableCell>Credit Card</TableCell> */}
                                <TableCell className="text-left">0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c</TableCell>
                                <TableCell className="text-left">Read-only</TableCell>
                                <TableCell className="text-left flex gap-3"><div>Delete</div><div><a href="" className='text-[#15A588]'>Edit</a></div></TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </div>

        </div>
    )

}


export default AccessControl