import Carousel from "@/components/home/Casrousel";
import VideoCardList from "@/components/home/VideoCardList";
import BlankSpace from "@/components/shared/BlankSpace";

export default function Home() {
  return (
    <main className="bg-slate-100 dark:bg-slate-900 mb-[50px]">
      <Carousel />
      <VideoCardList title="Trending" path="/category/trending" />
      <VideoCardList title="BDTOON Originals" path="/category/originals" />
      <VideoCardList title="Thriller" path="/category/thriller" />
      <VideoCardList title="Comedy" path="/category/comedy" />
      <BlankSpace />
    </main>
  );
}
