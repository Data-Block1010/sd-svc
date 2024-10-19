import { CustomSheet } from "./CustomSheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logo2 } from "@/src/lib/types/constant";

function MobileSideBar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const links = [
    {
      name: "Data Management",
      link: "/dashboard/data-management",
    },
    // {
    //   name: "Notifications",
    //   link: "/dashboard/notifications",
    // },
    // {
    //   name: "Access Control",
    //   link: "/dashboard/access-control",
    // },
    {
      name: "Data Verification Using(ZKP)",
      link: "/dashboard/data-verification",
    },
    // {
    //   name: "Schedule Reports",
    //   link: "/dashboard/schedule-reports",
    // },
    // {
    //   name: "User Reports",
    //   link: "/dashboard/user-reports",
    // },
  ];

  return (
    <CustomSheet side="right" isOpen={isOpen} onClose={onClose}>
      <div className="relative col-span-3 h-screen bg-white lg:block">
        <div className="relative mt-7 flex h-[34px] w-[34px] shrink-0 items-center">
          <Image src={logo2} alt="Logo" fill className="h-[20px] md:h-[34px]" />
        </div>
        <div className="scrollbar relative !z-40 mt-7 w-full space-y-2 overflow-y-scroll">
          {links.map((navlink, i) => {
            return (
              <Link
                href={navlink.link}
                key={i}
                className={`z-40 flex h-12 items-center gap-2 transition-all duration-500 ease-out  ${
                  pathname.includes(navlink.link)
                    ? "rounded-md bg-[#ffffff] "
                    : ""
                }`}
              >
                <p
                  className={`${
                    pathname === navlink.link
                      ? "font-semibold text-primary"
                      : "font-normal text-neutral-600"
                  } text-sm`}
                >
                  {navlink.name}
                </p>
              </Link>
            );
          })}
        </div>
        {/* <div className="mt-0">
          {pathname.includes("/dashboard") && <ConnectButton />}
        </div> */}
      </div>
    </CustomSheet>
  );
}

export default MobileSideBar;
