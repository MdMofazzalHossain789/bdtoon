"use client";
import { useState } from "react";

export default function Article({ body }) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <article>
      <p
        onClick={() => setSeeMore((prev) => !prev)}
        className={`button bg-slate-500 bg-opacity-0 active:bg-opacity-10 ${
          !seeMore && "line-clamp-[10]"
        }`}
      >
        {body}
      </p>
      <span className="button font-semibold text-blue-400">
        {seeMore ? "...Read less" : "Read more..."}
      </span>
    </article>
  );
}
