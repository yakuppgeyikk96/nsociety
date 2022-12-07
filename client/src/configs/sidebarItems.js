import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const iconSize = 'medium';

const sidebarItems = [
  {
    title: 'Home',
    icon: <HomeOutlinedIcon fontSize={iconSize} />
  },
  {
    title: 'Messages',
    icon: <ChatOutlinedIcon fontSize={iconSize} />
  },
  {
    title: 'Bookmarks',
    icon: <BookmarkBorderOutlinedIcon fontSize={iconSize} />
  },
  {
    title: 'Lists',
    icon: <ListOutlinedIcon fontSize={iconSize} />
  },
];

export default sidebarItems;