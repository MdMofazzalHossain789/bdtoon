"use client";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";
import { NavbarData } from "@/data/navbarData";

export default function NavbarItemList() {
  const currentPath = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t-[1px] border-slate-300 dark:border-slate-700 flex flex-row justify-evenly items-center z-40 bg-white dark:bg-slate-800">
      {NavbarData.map((item) => {
        return (
          <NavbarItem
            key={item.id}
            currentPath={currentPath}
            path={item.path}
            title={item.title}
            defaultIcon={item.defaultIcon}
            activeIcon={item.activeIcon}
          />
        );
      })}
    </nav>
  );
}
