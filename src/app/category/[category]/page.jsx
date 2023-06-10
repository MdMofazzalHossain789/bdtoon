import AllVideos from "@/components/seeAll/AllVideos";

export default function ShowAllVideos({ params }) {
  return (
    <main>
      <header className="border-b-[1px] border-slate-700 dark:border-slate-500  shadow-md mb-4">
        <h1 className="text-slate-700 dark:text-slate-100 text-lg uppercase mx-4 py-4 font-bold tracking-wider">
          {params.category}
        </h1>
      </header>
      <AllVideos />
    </main>
  );
}
