"use client";
import { galleryNavData } from "@/data/galleryNavData";
import NavbarItem from "./NavbarItem";
import { usePathname } from "next/navigation";

export default function GalleryNavbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 sm:top-[57.6px] bg-white dark:bg-slate-800 sm:bg-opacity-80 backdrop-blur-sm z-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex justify-center items-center flex-shrink-0 overflow-x-scroll text-slate-700 dark:text-slate-300">
          {galleryNavData.map((item) => {
            return (
              <NavbarItem
                key={item.id}
                title={item.title}
                path={item.path}
                route={pathname}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}
