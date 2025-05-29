import Image from "next/image";
import React from "react";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartHalfOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "../sidebar/SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generador Estático",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartHalfOutline size={40} />,
    title: "Favorites",
    subTitle: "Global State",
  },
];

export const Sidebar = () => {
  return (
    <aside
      id="menu"
      className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-slate-500 z-50 overflow-y-auto shadow-lg"
    >
      {/* Logo */}
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span className="text-gray-400">Wallethor</span>
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
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </nav>
    </aside>
  );
};
