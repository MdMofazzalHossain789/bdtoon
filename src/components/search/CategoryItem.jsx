import Image from "next/image";
import Link from "next/link";

export default function CategoryItem({ title, path, imageUrl, icon }) {
  return (
    <Link href={path} className="relative shadow-md active:opacity-80">
      <div className="h-[120px] w-full absolute z-10 bg-gradient-to-t from-black from-30% opacity-40" />
      <div className="h-[120px] w-full relative rounded-md overflow-hidden">
        <Image src={imageUrl} fill={true} className="object-cover" />
        <div className="absolute flex bottom-2 mx-2 items-center text-sm font-semibold gap-x-2 uppercase tracking-wider z-20">
          <div>{icon}</div>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
