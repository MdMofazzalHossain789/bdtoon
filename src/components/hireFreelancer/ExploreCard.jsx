export default function ExploreCard() {
  return (
    <div className="my-8 mx-4 h-[300px] rounded-md overflow-hidden bg-green-600 dark:bg-opacity-50 shadow-md">
      <div className="w-full h-2/3 overflow-hidden">
        <img
          src="https://img.shgstatic.com/clutchco-static/image/resize/500x350/s3fs-public/portfolio/f874166d59b18dbccf02c2f93177948e.gif"
          alt="test"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-slate-100 dark:text-slate-200 p-4 text-2xl font-semibold">
        <h1>Explore beautiful work, picked for you</h1>
      </div>
    </div>
  );
}
