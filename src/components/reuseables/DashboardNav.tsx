"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DashboardNav() {
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
    {
      name: "Access Control",
      link: "/dashboard/access-control",
    },
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
    <div className="hidden px-2 md:px-4 lg:px-10 xl:px-28 h-[80px] lg:flex items-center justify-between border-y">
      <div className="flex items-center gap-x-4">
        {links.map((_link, _index) => {
          return (
            <Link
              href={_link.link}
              key={_index}
              className={`text-base text-secondary hover:text-primary font-semibold ${
                pathname === _link.link ? "!text-primary" : ""
              } `}
            >
              {_link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardNav;
