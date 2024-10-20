import Nav from "@/src/components/reuseables/Nav";
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
    <div className="p-4 xl:p-6 flex gap-6 w-screen h-screen bg-white">
      <div className="hidden xl:block xl:w-[20%] border rounded-lg h-full border-gray-200 p-5">
        <Sidebar />
      </div>
      <div className="w-full xl:w-9/12 h-full overflow-y-scroll  xl:pt-6">
        <div className="xl:hidden mb-10">
          <Nav />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
