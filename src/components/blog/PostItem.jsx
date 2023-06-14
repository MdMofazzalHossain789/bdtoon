import ReactButton from "./ReactButton";

const getUser = async (userId) => {
  const user = await fetch(
    "https://api.slingacademy.com/v1/sample-data/users/" + userId
  );

  if (!user) throw new Error("No user");

  const data = await user.json();

  return data.user;
};

export default async function PostCard({
  userId,
  title,
  body,
  imageUrl,
  createdAt,
}) {
  const { first_name, last_name } = await getUser(userId);

  return (
    <div className=" bg-slate-50 dark:bg-slate-800 shadow-md mb-1">
      <header className="flex items-center py-2 mx-2 text-slate-600 dark:text-slate-300">
        <div className="active:opacity-10">
          <img
            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            alt="test"
            className="button h-8 w-8 rounded-full mr-1 opacity-100"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
            {`${first_name} ${last_name}`}
          </p>
          <p className="text-[10px] text-slate-700 dark:text-slate-300">
            {createdAt}
          </p>
        </div>
      </header>
      <main>
        <article className="mb-2 text-xs mx-2 text-slate-700 dark:text-slate-200">
          {title + body}
        </article>
        {imageUrl && (
          <div className="relative w-screen h-[300px]">
            <img
              src="https://i.pinimg.com/564x/0d/c3/10/0dc310f78ff8199b7bc1d30e4fa8a2e0.jpg"
              alt="test"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </main>
      <footer>
        <ReactButton />
      </footer>
    </div>
  );
}
