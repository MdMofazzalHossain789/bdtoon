"use client";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function SearchBar() {
  return (
    <div className="sticky top-0 flex justify-between items-center px-2 py-2 gap-x-2 z-30 bg-slate-900 bg-opacity-50 backdrop-blur-sm">
      <div className="p-2 px-3 bg-white bg-opacity-0 active:bg-opacity-10 rounded-full">
        <ArrowBackIosIcon className="-mr-2 " />
      </div>
      <div className="flex bg-white bg-opacity-10 items-center gap-x-2 rounded-full">
        <input
          autoFocus={true}
          className="pl-4 py-2 w-full bg-transparent outline-none mr-2"
          type="search"
          placeholder="Search here..."
        />
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-300 "></div>
    </div>
  );
}
