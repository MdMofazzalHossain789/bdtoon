"use client";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";
import { NavbarData } from "@/data/navbarData";

import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export default function NavbarItemList() {
  const currentPath = usePathname();

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 border-t-[1px] border-slate-300 dark:border-slate-700 flex flex-row justify-evenly items-center z-40 bg-white dark:bg-slate-800 sm:hidden">
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
      <nav className="fixed top-0 left-0 right-0 z-50 text-slate-100 bg-slate-800 bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-7xl md:mx-auto flex justify-between items-center">
          <div className="text-2xl">
            <h1 className="uppercase font-bold">Bdtoon</h1>
          </div>
          <div className="flex items-center gap-x-4 uppercase font-semibold">
            {NavbarData.map(({ id, title, path }) => (
              <Link
                href={path}
                key={id}
                className={`button border-b-2 border-b-green-400 border-opacity-0 px-2 py-4 ${
                  currentPath === path
                    ? "text-green-400 border-opacity-100"
                    : ""
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="flex justify-between items-center gap-4 text-slate-100">
            <SearchIcon className="text-4xl button p-1 bg-slate-200 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 rounded-full" />
            <AutorenewIcon className="text-4xl button p-1 bg-slate-200 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 rounded-full" />
            <PersonIcon className="text-4xl button p-1 bg-slate-200 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 rounded-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
