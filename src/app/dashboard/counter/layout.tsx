import { Sidebar } from "@/components/sidebar/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white text-center justify-center">
      <div className="flex ">
        <Sidebar></Sidebar>

        {/* Main content */}
        <main className="w-full p-6 text-slate-800 ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
