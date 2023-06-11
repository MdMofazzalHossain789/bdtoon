"use client";
import { galleryNavData } from "@/data/galleryNavData";
import NavbarItem from "./NavbarItem";
import { usePathname } from "next/navigation";

export default function GalleryNavbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-white dark:bg-slate-800">
      <div className="flex items-center flex-shrink-0 overflow-x-scroll text-slate-700 dark:text-slate-300">
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
    </nav>
  );
}
