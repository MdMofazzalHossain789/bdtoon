import GalleryItem from "./GalleryItem";

const getImages = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");

  if (!res.ok) throw new Error("Nothing is here");

  return res.json();
};

export default async function GalleryItemList() {
  const length = "grid-rows-" + 12;
  const data = await getImages();

  return (
    <div
      className={`h-full grid grid-cols-2 grid-flow-dense gap-1 px-2 py-2 overflow-y-scroll bg-slate-100 dark:bg-slate-900`}
    >
      {data.map((image) => (
        <GalleryItem
          key={image.id}
          imageUrl={image.thumbnailUrl}
          title={image.title}
        />
      ))}
    </div>
  );
}
