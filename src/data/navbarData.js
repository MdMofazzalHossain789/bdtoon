import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CategoryIcon from "@mui/icons-material/Category";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CollectionsIcon from "@mui/icons-material/Collections";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ArticleIcon from "@mui/icons-material/Article";

import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export const NavbarData = [
  {
    id: "nd1",
    title: "Home",
    path: "/",
    defaultIcon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
  },
  {
    id: "nd2",
    title: "Category",
    path: "/category",
    defaultIcon: <CategoryOutlinedIcon />,
    activeIcon: <CategoryIcon />,
  },
  {
    id: "nd3",
    title: "Shorts",
    path: "/shorts",
    defaultIcon: <PlayArrowOutlinedIcon />,
    activeIcon: <PlayArrowIcon />,
  },
  {
    id: "nd4",
    title: "gallery",
    path: "/gallery",
    defaultIcon: <CollectionsOutlinedIcon />,
    activeIcon: <CollectionsIcon />,
  },
  {
    id: "nd5",
    title: "Blog",
    path: "/blog",
    defaultIcon: <ArticleOutlinedIcon />,
    activeIcon: <ArticleIcon />,
  },
  {
    id: "nd1",
    title: "Make Animation",
    path: "/hire-freelancer",
    defaultIcon: <DirectionsRunIcon />,
    activeIcon: <DirectionsRunIcon />,
  },
];
