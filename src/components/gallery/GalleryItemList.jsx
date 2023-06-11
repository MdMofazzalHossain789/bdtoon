import GalleryItem from "./GalleryItem";

export default function GalleryItemList() {
  const length = "grid-rows-" + 12;

  return (
    <div
      className={`h-full grid grid-cols-2 grid-flow-dense gap-1 px-2 py-2 overflow-y-scroll bg-slate-100 dark:bg-slate-900`}
    >
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}
