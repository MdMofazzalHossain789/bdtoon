import PostOptionItem from "./PostOptionItem";

export default function PostOptionList({ show, hide }) {
  if (!show) return null;
  return (
    <div className="absolute bottom-12 right-4 bg-slate-700 text-slate-100 w-fit py-2 rounded-md gap-1 z-20">
      <PostOptionItem title="Turn on notification" />
      <PostOptionItem title="Turn off notification" />
      <PostOptionItem title="Copy link to share" />
      <PostOptionItem title="Report this post" />
    </div>
  );
}
