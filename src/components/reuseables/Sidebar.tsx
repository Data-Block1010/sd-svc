"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { ChevronsUpDown, PieChart, Search } from "lucide-react";
import { Button } from "../ui/button";
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
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard/overview",
      icon: (
        <Home
          size={20}
          color={pathname === "/dashboard/overview" ? "#15A588" : "#717680"}
        />
      ),
    },
    {
      title: "Upload Documents",
      href: "/dashboard/data-management",
      icon: (
        <FolderOpen
          size="20"
          color={
            pathname === "/dashboard/data-management" ? "#15A588" : "#717680"
          }
        />
      ),
    },
    {
      title: "Verification Status",
      href: "/dashboard/verification-status",
      icon: (
        <Verify
          size="20"
          color={
            pathname === "/dashboard/verification-status"
              ? "#15A588"
              : "#717680"
          }
        />
      ),
    },
    {
      title: "Generate ZKP",
      href: "/dashboard/generate-zk-proof",
      icon: (
        <PieChart
          size="20"
          color={pathname === "/dashboard/generate-zk-proof" ? "#15A588" : "#717680"}
        />
      ),
    },
    {
      title: "Verification Requests",
      href: "/dashboard/verification-requests",
      icon: (
        <NoteFavorite
          size="20"
          color={
            pathname === "/dashboard/verification-requests"
              ? "#15A588"
              : "#717680"
          }
        />
      ),
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: (
        <Setting2
          size="20"
          color={pathname === "/dashboard/settings" ? "#15A588" : "#717680"}
        />
      ),
    },
    {
      title: "Support",
      href: "/dashboard/support",
      icon: (
        <Messages2
          size="20"
          color={pathname === "/dashboard/support" ? "#15A588" : "#717680"}
        />
      ),
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: (
        <Notification
          size="20"
          color={
            pathname === "/dashboard/notifications" ? "#15A588" : "#717680"
          }
        />
      ),
    },
  ];
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
        {routes.map((route) => (
          <div
            key={route.title}
            className={`flex items-center gap-4 cursor-pointer hover:bg-primary10 text-border2 px-3 py-2 rounded-lg font-semibold ${
              pathname === route.href && "!text-primary bg-[#FAFAFA]"
            }`}
          >
            {route.icon}
            <Link href={route.href}>{route.title}</Link>
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
}

export default Sidebar;
