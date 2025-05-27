import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },

  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
];

export const Sidebar = () => {
  return (
    /* Sidebar */
    <aside
      id="menu"
      style={{ width: "350px" }}
      className="bg-gray-900 text-slate-500 w-64 left-0 top-0 h-screen z-10 overflow-y-auto"
    >
      {/* Logo */}
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"></IoLogoReact>
          <span className="text-gray-400">Wallethor</span>
          {/*<span className="text-blue-600"></span>*/}
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      {/* Profile */}
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <Image
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
            alt="User Avatar"
            width={50}
            height={50}
          />
          <span className="text-sm md:text-base font-bold">Erick</span>
        </a>
      </div>

      {/* Navigation */}
      <nav id="nav" className="px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item}></SidebarMenuItem>
        ))}
      </nav>
    </aside>
  );
};
