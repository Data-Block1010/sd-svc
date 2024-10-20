"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { ChevronsUpDown, PieChart, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FolderOpen,
  Home,
  Messages2,
  NoteFavorite,
  Notification,
  Profile,
  Setting2,
  Verify,
} from "iconsax-react";

const Sidebar = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        title: "Dashboard",
        href: "/dashboard/overview",
        icon: Home,
      },
      {
        title: "Upload Documents",
        href: "/dashboard/data-management",
        icon: FolderOpen,
      },
      {
        title: "Verification Status",
        href: "/dashboard/verification-status",
        icon: Verify,
      },
      {
        title: "Generate ZKP",
        href: "/dashboard/generate-zk-proof",
        icon: PieChart,
      },
      {
        title: "Verification Requests",
        href: "/dashboard/verification-requests",
        icon: NoteFavorite,
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Setting2,
      },
      {
        title: "Support",
        href: "/dashboard/support",
        icon: Messages2,
      },
      {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: Notification,
      },
    ],
    []
  );

  return (
    <div className="relative h-full">
      <div className="relative h-10 w-[150px] md:w-[197px]">
        <Image src={"/images/logo.svg"} fill alt="logo" />
      </div>
      <Input
        className="mt-4 rounded-lg border-[#D5D7DA]"
        leftIcon={<Search color="#717680" />}
        placeholder="Search"
        rightIcon={
          <Button
            variant={"outline"}
            className="bg-white text-border2 text-sm border border-border px-2 py-[1px] placeholder:text-[#717680]"
          >
            ⌘ K
          </Button>
        }
      />
      <div className="mt-5 space-y-2">
        {routes.map(({ title, href, icon: Icon }) => (
          <div
            key={title}
            className={`flex items-center gap-4 cursor-pointer hover:bg-primary10 text-border2 px-3 py-2 rounded-lg font-semibold ${
              pathname === href && "!text-primary bg-[#FAFAFA]"
            }`}
          >
            <Icon size={20} color={pathname === href ? "#15A588" : "#717680"} />
            <Link href={href}>{title}</Link>
          </div>
        ))}
      </div>
      <div className="w-full border rounded-lg flex p-3 absolute bottom-0 left-0 justify-between">
        <div className="flex gap-3">
          <div className="bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center">
            <Profile size="20" color="#535862" />
          </div>
          <div className="">
            <h1 className="font-semibold text-sm">User Name</h1>
            <p className="text-[#A4A7AE] text-sm font-normal">userid</p>
          </div>
        </div>
        <ChevronsUpDown color="#A4A7AE" />
      </div>
    </div>
  );
};

export default Sidebar;
