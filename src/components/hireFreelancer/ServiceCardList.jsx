import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function ServiceCardList() {
  return (
    <section>
      <div className="mx-4 uppercase flex justify-between items-center">
        <h1 className="  text-sm font-bold text-blue-600 dark:text-blue-400">
          Popular Services
        </h1>
        <Link
          href={"/"}
          className="button bg-opacity-0 bg-slate-300 dark:bg-slate-100 dark:bg-opacity-0 hover:bg-opacity-20 rounded-full"
        >
          <p className="button px-4 py-1 text-xs font-semibold text-green-500 dark:text-green-400">
            See all
          </p>
        </Link>
      </div>
      <div className="px-4 flex overflow-x-scroll gap-x-1 mt-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
