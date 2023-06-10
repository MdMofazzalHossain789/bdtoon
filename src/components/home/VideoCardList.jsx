import Link from "next/link";
import VideoCard from "./VideoCardItem";

export default function VideoCardList({ title, path }) {
  return (
    <section className="bg-white dark:bg-slate-800">
      <div className="mx-4 pt-4 pb-2 uppercase font-semibold flex justify-between items-center text-slate-700 dark:text-slate-200">
        <h1 className="  text-sm font-semibold">{title}</h1>
        <Link
          href={path}
          className="button bg-opacity-0 dark:bg-slate-100 dark:bg-opacity-0 hover:bg-opacity-20 rounded-full"
        >
          <p className="px-4 py-1 text-xs text-green-500">See all</p>
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
