"use client";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="text-sm py-2 text-slate-500 dark:text-slate-600 bg-white dark:bg-slate-700 mx-4 rounded-md shadow-md border-[1px] border-slate-200 dark:border-slate-600">
      <div className="flex  py-1 px-2">
        <SearchIcon className="mr-2 text-slate-400 dark:text-slate-500 " />
        <input
          type="search"
          placeholder="Search services"
          className="w-full bg-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-600 dark:text-slate-200 font-semibold"
        />
      </div>
    </div>
  );
}
