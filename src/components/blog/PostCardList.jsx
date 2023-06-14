import PostCard from "./PostItem";

const getData = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts"
  );
  if (!res.ok) throw new Error("Failed to fetch the data");

  const data = await res.json();

  return data.blogs;
};

export default async function PostCardList() {
  const data = await getData();

  return (
    <div className="overflow-y-scroll">
      {data.map((post) => (
        <PostCard
          key={post.id}
          userId={post.user_id}
          title={post.title}
          body={post.content_text}
          createdAt={post.created_at}
        />
      ))}
    </div>
  );
}
