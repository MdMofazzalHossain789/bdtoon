import PostCard from "./PostItem";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch the data");
  return res.json();
};

export default async function PostCardList() {
  const data = await getData();
  console.log(data);

  return (
    <div className="overflow-y-scroll">
      {data.map((post) => (
        <PostCard
          key={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
