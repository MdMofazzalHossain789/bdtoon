"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
export default function ReactButton() {
  return (
    <div className="flex items-center justify-around py-1 border-b-[1px] dark:border-slate-500">
      <FavoriteBorderIcon className="text-3xl" />
      <div className="h-[20px] w-[2px] dark:bg-slate-500 rounded-full" />
      <ShareIcon className="text-3xl" />
    </div>
  );
}
