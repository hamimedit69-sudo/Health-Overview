"use client";

import Image from "next/image";
import logo from "../Assets/logo.png";
import React from "react";
import {
  LayoutGrid,
  CalendarDays,
  MessageSquare,
  PieChart,
  Settings,
  LogOut,
} from "lucide-react";

export default function DashboardSidebar() {
  const menuItems = [
    { icon: LayoutGrid, active: true },
    { icon: CalendarDays },
    { icon: MessageSquare },
    { icon: PieChart },
    { icon: Settings },
    { icon: LogOut },
  ];

  return (
    <aside
      className="
        fixed left-0 top-0 z-50
        flex h-screen w-14 flex-col items-center
        rounded-r-[12px] bg-[#403B3B]
        py-4
        sm:w-[72px] sm:py-7
        lg:w-20 lg:py-8
      "
    >
      <div className="mb-8 flex h-9 w-9 items-center justify-center sm:mb-12 sm:h-10 sm:w-10">
        <Image
          src={logo}
          alt="logo"
          width={30}
          height={30}
          className="h-auto w-[24px] sm:w-[30px]"
        />
      </div>

      <nav className="flex flex-col items-center gap-4 sm:gap-7">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              type="button"
              aria-label={`Navigation item ${index + 1}`}
              className="
                flex h-8 w-8 items-center justify-center
                rounded-[8px]
                bg-white text-[#777374]
                sm:h-10 sm:w-10 sm:rounded-[9px]
              "
            >
              <Icon size={17} className="sm:h-5 sm:w-5" />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}