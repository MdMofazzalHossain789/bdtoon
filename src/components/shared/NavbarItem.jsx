import Link from "next/link";

export default function NavbarItem({
  currentPath,
  path,
  title,
  defaultIcon,
  activeIcon,
}) {
  const selected = currentPath === path ? true : false;

  return (
    <Link
      className={`button flex flex-1 flex-col items-center pt-1 h-[55px] bg-slate-800 max-w-[80px] bg-opacity-0 rounded-md ${
        !selected && "hover:bg-opacity-20 active:bg-opacity-10"
      }`}
      href={path}
    >
      <div
        className={`${
          selected ? "text-green-500" : "text-slate-700 dark:text-slate-400"
        }`}
      >
        {selected ? activeIcon : defaultIcon}
      </div>
      <p
        className={`w-[60px] text-center text-[10px] leading-[10px] ${
          selected
            ? "text-green-500 font-semibold"
            : "text-slate-700 dark:text-slate-400"
        }`}
      >
        {title}
      </p>
    </Link>
  );
}
