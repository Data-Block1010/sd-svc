import Sidebar from "@/src/components/reuseables/Sidebar";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <>
    //   <Nav />
    //   <DashboardNav />
    //   <div className="border-b h-px w-full border-neutral-300 lg:hidden" />
    //   <div className="px-2 md:px-8 lg:px-10 xl:px-28 ">{children}</div>
    // </>
    <div className="p-2 grid grid-cols-12 w-screen h-screen bg-white">
      <div className="col-span-3 max-w-[292px] border rounded-lg h-full border-gray-200 p-5">
        <Sidebar />
      </div>
      <div className="col-span-9 max-w-full h-full overflow-y-scroll -ml-5 pt-6">
        {children}
      </div>
    </div>
  );
}

export default Layout;
