import GalleryItem from "./GalleryItem";

const getImages = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
  );

  if (!res.ok) throw new Error("Nothing is here");

  const data = await res.json();
  return data.photos;
};

export default async function GalleryItemList() {
  const data = await getImages();

  return (
    <div
      className={`h-full grid grid-cols-2 sm:grid-cols-8 grid-flow-dense gap-1 px-2 py-2 overflow-y-scroll bg-slate-100 dark:bg-slate-900`}
    >
      {data.map((image) => (
        <GalleryItem key={image.id} imageUrl={image.url} title={image.title} />
      ))}
    </div>
  );
}
