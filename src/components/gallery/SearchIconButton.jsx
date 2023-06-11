"use client";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchIconButton() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="fixed bottom-[80px] left-4 right-4 transition-all ease-in-out">
      <div
        className={`flex items-center text-green-500 bg-white dark:bg-slate-800 border-[1px] border-slate-900 border-opacity-10 rounded-full shadow-lg ${
          selected ? "w-full" : " w-fit"
        }`}
        onClick={() => setSelected(true)}
      >
        {selected && (
          <input
            type="search"
            placeholder="Search image here"
            className="ml-1 pl-4 w-full text-sm outline-none text-slate-800 dark:text-slate-200 bg-transparent font-semibold border-r-2 dark:border-r-slate-500"
          />
        )}
        <button
          className={`h-full py-2 rounded-full bg-slate-800 bg-opacity-0 active:bg-opacity-10  ${
            selected ? "px-4" : "px-2"
          }`}
        >
          <SearchIcon className="text-2xl text-slate-600 dark:text-green-500" />
        </button>
      </div>
    </div>
  );
}
