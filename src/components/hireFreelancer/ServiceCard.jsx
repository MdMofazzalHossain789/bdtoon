import Link from "next/link";

export default function ServiceCard() {
  return (
    <div className="button m-1 flex-shrink-0 h-[200px] w-[150px] overflow-hidden rounded-lg text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-700 shadow-md">
      <div className="h-2/3">
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="test"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-1/3">
        <h1 className="flex h-full items-center px-2 text-sm font-semibold">
          Logo Design
        </h1>
      </div>
    </div>
  );
}
