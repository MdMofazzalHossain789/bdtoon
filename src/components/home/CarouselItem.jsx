"use client";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function CarouselItem() {
  return (
    <div className="relative">
      <div className="absolute top-0 h-[500px] sm:h-screen w-screen bg-gradient-to-tr from-white dark:from-slate-800 from-30% to-80% z-10" />
      <div className="absolute h-[500px] sm:h-screen w-screen top-0 z-20 pt-[150px] px-4">
        <div className="sm:max-w-6xl mx-auto">
          <header className="relative w-4/6 sm:w-3/6">
            <div className="button flex items-center mb-4 text-slate-100 bg-blue-500 w-fit px-2 uppercase rounded-full">
              <p className="text-sm sm:text-lg font-bold tracking-wider">
                Bdtoon
              </p>
              <p className="ml-1 text-[10px] sm:text-md font-semibold">
                originals
              </p>
            </div>

            <h1 className="uppercase text-md sm:text-4xl font-bold line-clamp-3 leading-5 text-slate-800 dark:text-slate-100">
              The Stranger Lorem ipsum dolor
            </h1>
            <p className="mt-2 text-xs sm:text-xl font-semibold line-clamp-[10] border-t-2 border-slate-700 dark:border-slate-100 text-slate-700 dark:text-slate-200 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              aliquam rem eum consectetur facere? Blanditiis, repudiandae nam
              labore culpa facilis amet odio, in rerum dolorem nobis illo totam
              fugit voluptatibus. Accusamus commodi tempora ex, aliquid eligendi
              recusandae laborum eius autem odio dignissimos veritatis, totam,
              doloribus possimus! Alias nostrum sapiente, harum ipsa hic,
              voluptate doloremque omnis dolores vitae fuga corrupti quo. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Autem labore,
              excepturi tenetur quibusdam asperiores consectetur itaque. Laborum
              commodi totam dolor enim quisquam perspiciatis sequi repudiandae
              architecto recusandae? Eaque, est itaque. Minus laboriosam quo
              molestias, sunt dolorem laborum alias sit mollitia corporis,
              soluta fuga laudantium repellat. Ex sed doloremque, beatae
              dignissimos libero eius odio quisquam ipsa facilis eligendi.
              Doloremque, error impedit!
            </p>

            <div className="mt-6 flex gap-x-2 uppercase">
              <Link
                href={"/"}
                className="button flex items-center w-fit bg-green-600 text-sm text-white font-semibold px-2 sm:px-6 py-1 sm:py-2 rounded-sm"
              >
                <div>
                  <PlayCircleOutlineIcon className="mr-1 text-[16px] sm:text-xl" />
                </div>
                <p className="text-xs sm:text-xl">Watch Now</p>
              </Link>
              <Link
                href={"/"}
                className="button flex items-center w-fit bg-slate-600 dark:bg-slate-200 text-sm text-white dark:text-slate-800 font-semibold px-2 sm:px-6 py-1 sm:py-2 rounded-sm"
              >
                <p className="text-xs sm:text-xl">More Info</p>
              </Link>
            </div>
          </header>
        </div>
      </div>
      <div className="h-[500px] sm:h-screen w-screen">
        <img
          src="https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/fUWo-msb-1.jpeg"
          alt="test"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
