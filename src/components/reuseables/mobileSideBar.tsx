import { CustomSheet } from "./CustomSheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logo2 } from "@/src/lib/types/constant";
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
import { useMemo } from "react";
import { PieChart } from "lucide-react";

function MobileSideBar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
        href: "/dashboard/data-verification",
        icon: NoteFavorite,
      },
      {
        title: "Settings",
        // href: "/dashboard/settings",
        href: "#",
        icon: Setting2,
      },
      {
        title: "Support",
        // href: "/dashboard/support",
        href: "#",
        icon: Messages2,
      },
      {
        title: "Notifications",
        // href: "/dashboard/notifications",
        href: "#",
        icon: Notification,
      },
    ],
    []
  );

  return (
    <CustomSheet side="right" isOpen={isOpen} onClose={onClose}>
      <div className="relative col-span-3 h-screen bg-white lg:block">
        <div className="relative mt-7 flex h-[34px] w-[34px] shrink-0 items-center">
          <Image src={logo2} alt="Logo" fill className="h-[20px] md:h-[34px]" />
        </div>
        <div className="scrollbar relative !z-40 mt-7 w-full space-y-2 overflow-y-scroll">
          {routes.map(({ title, href, icon: Icon }) => (
            <div
              key={title}
              className={`flex items-center gap-4 cursor-pointer hover:bg-primary10 text-border2 px-3 py-2 rounded-lg font-semibold ${
                pathname === href && "!text-primary bg-[#FAFAFA]"
              }`}
            >
              <Icon
                size={20}
                color={pathname === href ? "#15A588" : "#717680"}
              />
              <Link href={href} onClick={onClose}>
                {title}
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="mt-0">
          {pathname.includes("/dashboard") && <ConnectButton />}
        </div> */}
      </div>
    </CustomSheet>
  );
}

export default MobileSideBar;
