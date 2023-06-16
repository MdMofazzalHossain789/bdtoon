import Link from "next/link";

export default function NavbarItem({ title, path, route }) {
  const selected = path === route ? true : false;

  return (
    <Link
      href={path}
      className={`mx-1 px-4 py-2 font-semibold text-sm sm:text-lg transition-all ease-in-out duration-300 bg-slate-500 dark:bg-slate-100 bg-opacity-0 dark:bg-opacity-0 border-b-2 border-opacity-0 border-green-500 ${
        selected
          ? "border-opacity-100 dark:bg-opacity-10  text-green-500 bg-opacity-5"
          : ""
      }`}
    >
      {title}
    </Link>
  );
}
