import ReactButton from "./ReactButton";

export default function PostCard() {
  return (
    <div className="bg-slate-800 shadow-md mb-2">
      <header className="flex items-center py-2 mx-2 ">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt="test"
          className="h-10 w-10 rounded-full mr-1"
        />
        <div className="flex flex-col">
          <p className="text-xs font-semibold">Md Mofazzal Hossain</p>
          <p className="text-[10px] text-slate-600 dark:text-slate-300">
            20 May 2023
          </p>
        </div>
      </header>
      <main>
        <article className="my-2 text-xs mx-4">
          Hello , I am drawing this.. Help me with your feedback
        </article>
        <div className="relative w-screen h-[300px]">
          <img
            src="https://i.pinimg.com/564x/0d/c3/10/0dc310f78ff8199b7bc1d30e4fa8a2e0.jpg"
            alt="test"
            className="h-full w-full object-cover"
          />
        </div>
      </main>
      <footer>
        <ReactButton />
      </footer>
    </div>
  );
}
