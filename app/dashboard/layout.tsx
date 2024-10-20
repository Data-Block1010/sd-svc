import Nav from "@/src/components/reuseables/Nav";
import Sidebar from "@/src/components/reuseables/Sidebar";
import React from "react";

function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="p-4 xl:p-6 flex gap-6 w-screen h-screen bg-white">
			<div className="hidden xl:block xl:w-[20%] border rounded-lg h-full border-gray-200 p-5">
				<Sidebar />
			</div>
			<div className="w-full xl:w-9/12 h-full overflow-y-scroll  xl:pt-6">
				<div className=" mb-10">
					<Nav />
				</div>
				<div className="children">{children}</div>
			</div>
		</div>
	);
}

export default Layout;
