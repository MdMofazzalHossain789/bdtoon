import Carousel from "@/components/home/Casrousel";
import VideoCardList from "@/components/home/VideoCardList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-100 mb-[50px]">
      <Carousel />
      <VideoCardList title="Trending" path="/videos/trending" />
      <VideoCardList title="BDTOON Originals" path="/videos/trending" />
      <VideoCardList title="Thriller" path="/videos/trending" />
      <VideoCardList title="Comedy" path="/videos/trending" />
    </main>
  );
}
