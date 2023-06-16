"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
export default function ReactButton() {
  const [liked, setLiked] = useState(false);

  console.log(liked);

  return (
    <div className="mt-2 flex items-center justify-center border-t-[1px] border-b-[1px] border-slate-300 dark:border-slate-500">
      <button
        onClick={() =>
          setLiked((prev) => {
            return !prev;
          })
        }
        className="m-1 py-[2px] button w-full h-full bg-slate-400 bg-opacity-0 dark:bg-slate-100 dark:bg-opacity-0 active:bg-opacity-10 rounded-md transition ease-in-out "
      >
        {liked ? (
          <FavoriteIcon className="text-[14px] text-red-500" />
        ) : (
          <FavoriteBorderIcon className="text-[14px]" />
        )}
      </button>
      <div className="h-[20px] w-[2px] bg-slate-300 dark:bg-slate-500 rounded-full " />
      <button className="relative m-1 py-[2px] button w-full h-full bg-slate-400 bg-opacity-0 dark:bg-slate-100 dark:bg-opacity-0 active:bg-opacity-10 rounded-md transition ease-in-out ">
        <ShareIcon className="text-[14px]" />
      </button>
    </div>
  );
}
