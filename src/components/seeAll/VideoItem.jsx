"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AvTimerIcon from "@mui/icons-material/AvTimer";

export default function VideoItem() {
  return (
    <div className="w-screen text-slate-800 dark:text-slate-50 bg-white dark:bg-slate-700 mb-1 border-b-[1px] border-slate-400">
      <div className="h-[150px]">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/858/754/desktop-wallpaper-baahubali-pushpa-rrr-the-south-rises-as-bollywood-appears-fake-out-of-touch-bollywood-movie-poster-2022-thumbnail.jpg"
          alt="test"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="py-1 px-2">
        <h1 className="text-xs font-semibold">The movie title</h1>
      </div>
      <div className="dark:text-slate-200 flex justify-between items-center mx-8 mb-1 text-[10px] font-semibold">
        <div className="flex items-center">
          <div>
            <VisibilityIcon className="text-sm mr-1" />
          </div>
          <p>175k views</p>
        </div>
        <div className="flex items-center">
          <div>
            <AvTimerIcon className="text-sm mr-1" />
          </div>
          <p>1 days ago</p>
        </div>
      </div>
    </div>
  );
}
