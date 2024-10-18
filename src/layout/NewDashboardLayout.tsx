import React from "react";

interface IProps {
  children: React.ReactNode;
}

function NewDashboardLayout({ children }: IProps) {
  return (
    <div className="p-4 grid grid-cols-12 gap-6">
      <div className="colspan-3 h-1 bg-red-500"></div>
      <div className="col-span-9 h-1 bg-black">{children}</div>
    </div>
  );
}

export default NewDashboardLayout;
