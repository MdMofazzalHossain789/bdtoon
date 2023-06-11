import GalleryItemList from "@/components/gallery/GalleryItemList";
import GalleryNavbar from "@/components/gallery/GalleryNavbar";
import SearchIconButton from "@/components/gallery/SearchIconButton";
import BlankSpace from "@/components/shared/BlankSpace";

export default function Gallery() {
  return (
    <div>
      <div className="relative">
        <GalleryNavbar />
        <div>
          <GalleryItemList />
        </div>
        <BlankSpace />
      </div>
      <SearchIconButton />
    </div>
  );
}
