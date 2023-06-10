export default function VideoCard({ path, title = "test", imageUrl }) {
  const url = imageUrl
    ? imageUrl
    : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

  return (
    <div className="h-28 w-20 m-1 flex-shrink-0 active:opacity-80">
      <img
        src={url}
        alt={title}
        className="h-full w-full object-cover rounded-md"
      />
    </div>
  );
}
