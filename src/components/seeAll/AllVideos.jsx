import VideoCard from "../home/VideoCardItem";
import VideoItem from "./VideoItem";

export default function AllVideos() {
  return (
    <div className="flex flex-col overflow-y-scroll">
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
}
