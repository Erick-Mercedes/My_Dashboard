"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`flex items-center w-full px-2 py-3 mb-1 space-x-2 border-b border-slate-700 hover:bg-white/5 transition duration-150 ease-linear ${
        currentPath === path ? "bg-blue-800" : ""
      }`}
    >
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-5">{title}</span>
        <span className="hidden md:block text-sm text-white/50">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
