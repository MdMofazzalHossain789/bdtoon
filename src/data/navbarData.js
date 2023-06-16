import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import SearchIcon from "@mui/icons-material/Search";

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
    title: "Search",
    path: "/category",
    defaultIcon: <SearchIcon />,
    activeIcon: <SearchIcon />,
  },
  {
    id: "nd4",
    title: "gallery",
    path: "/gallery/all",
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
