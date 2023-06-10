import Carousel from "@/components/home/Casrousel";
import VideoCardList from "@/components/home/VideoCardList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-100 mb-[50px]">
      <Carousel />
      <VideoCardList title="Trending" path="/category/trending" />
      <VideoCardList title="BDTOON Originals" path="/category/originals" />
      <VideoCardList title="Thriller" path="/category/thriller" />
      <VideoCardList title="Comedy" path="/category/comedy" />
    </main>
  );
}
