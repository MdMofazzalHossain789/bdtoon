import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";

export const metadata = {
  title: "Bdtoon",
  description: "A Bangladeshi Cartoon Platform",
  keywords:
    "bdtoon, bdtoonofficial, bdtoon official, bd cartoon, bangladeshi cartoon, bd toon",
};

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center">
      <div className="w-fit uppercase dark:bg-blue-600 px-4 py-2 font-semibold skew-x-6">
        Under Construction
      </div>
      <div className="">
        <h1 className="text-6xl uppercase font-bold">Bdtoon</h1>
      </div>
      <p className="text-2xl tracking-wider font-semibold">
        A Bangladeshi Cartoon Platform
      </p>
      <SocialMedia />
    </div>
  );
}
