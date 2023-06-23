import Link from "next/link";

export default function Icon({ title, icon, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`group mt-14 relative flex justify-center p-2 bg-white bg-opacity-0 border-[1px] border-white border-opacity-0 hover:bg-opacity-10 active:border-opacity-60 ease-out duration-300 rounded-full`}
    >
      {icon}
      <div className="no hidden group-hover:block absolute -top-10 text-center font-semibold bg-white bg-opacity-10 px-2 py-1 rounded-md">
        {title}
      </div>
    </Link>
  );
}
