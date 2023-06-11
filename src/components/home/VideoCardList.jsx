import Link from "next/link";
import VideoCard from "./VideoCardItem";

export default function VideoCardList({ title, path }) {
  return (
    <section className="bg-white dark:bg-slate-800 pb-2 mb-2">
      <div className="mx-4 pt-4 pb-2 uppercase font-semibold flex justify-between items-center text-slate-700 dark:text-slate-200">
        <h1 className="  text-sm font-bold text-blue-600 dark:text-blue-400">
          {title}
        </h1>
        <Link
          href={path}
          className="button bg-opacity-0 bg-slate-300 dark:bg-slate-100 dark:bg-opacity-0 hover:bg-opacity-20 rounded-full"
        >
          <p className="px-4 py-1 text-xs font-semibold text-green-500 dark:text-green-400">
            See all
          </p>
        </Link>
      </div>
      <div className="flex overflow-x-scroll px-1">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </section>
  );
}
