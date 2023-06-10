"use client";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="text-sm py-2 text-slate-500 bg-white mx-4 rounded-md shadow-md border-[1px] border-slate-200">
      <div className="flex  py-1 px-2">
        <SearchIcon className="mr-2" />
        <input
          type="search"
          placeholder="Search services"
          className="w-full outline-none text-slate-600 font-semibold"
        />
      </div>
    </div>
  );
}
