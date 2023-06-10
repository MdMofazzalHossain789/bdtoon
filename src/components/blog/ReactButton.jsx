"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
export default function ReactButton() {
  return (
    <div className="mt-2 flex items-center justify-center border-t-[1px] border-b-[1px] border-slate-300 dark:border-slate-500">
      <button className="m-1 py-1 button w-full h-full bg-slate-400 bg-opacity-0 dark:bg-slate-100 dark:bg-opacity-0 active:bg-opacity-10 rounded-md">
        <FavoriteBorderIcon className="text-[18px]" />
      </button>
      <div className="h-[20px] w-[2px] bg-slate-300 dark:bg-slate-500 rounded-full" />
      <button className="m-1 py-1 button w-full h-full bg-slate-400 bg-opacity-0 dark:bg-slate-100 dark:bg-opacity-0 active:bg-opacity-10 rounded-md">
        <ShareIcon className="text-[18px]" />
      </button>
    </div>
  );
}
