import React from 'react';
import SidebarRow from './SidebarRow';
import {
  ExpandMoreOutlined,
  History,
  HomeSharp,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from '@mui/icons-material';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharp} title="Home" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
    </div>
  );
};

export default Sidebar;
