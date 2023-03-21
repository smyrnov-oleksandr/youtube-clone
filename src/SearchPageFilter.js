import React from 'react';
import { TuneOutlined } from '@mui/icons-material';
import './SearchPageFilter.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPageFilter = () => {
  return (
    <>
      <div className="search__page">
        <div className="search__page-filter">
          <TuneOutlined />
          <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
          image="https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s88-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          verified
          subs="657K"
          numOfVideos={382}
          description="Awesome videos of programming"
        />
        <hr />
        <VideoRow
          views="1.4M"
          subs="657K"
          description="Do you want to become developer? Let's started!"
          timestamp="59 seconds ago"
          channel="Clever Programmer"
          title="Build Youtube clone on REACT.JS"
          image="https://i.ytimg.com/an_webp/vIRBSI-elUM/mqdefault_6s.webp?du=3000&sqp=CLeH6KAG&rs=AOn4CLAtcY0EtpPAWRMYsO3pTHqcDD4Udw"
        />
        <VideoRow
          views="1.4M"
          subs="657K"
          description="Do you want to become developer? Let's started!"
          timestamp="59 seconds ago"
          channel="Clever Programmer"
          title="Build WhatsApp clone on REACT.JS"
          image="https://i.ytimg.com/an_webp/cuR9R1Hj1Ug/mqdefault_6s.webp?du=3000&sqp=CKD256AG&rs=AOn4CLADS5YJTzO7jnysdBD_3grXzrA27g"
        />
        <VideoRow
          views="1.4M"
          subs="657K"
          description="Do you want to become developer? Let's started!"
          timestamp="59 seconds ago"
          channel="Clever Programmer"
          title="Build SPOTIFY clone on REACT.JS"
          image="https://i.ytimg.com/an_webp/xP3cxbDUtrc/mqdefault_6s.webp?du=3000&sqp=CIyP6KAG&rs=AOn4CLD6F7IcLoeeTsZ4VH2hD7q_viBx3Q"
        />
        <VideoRow
          views="1.4M"
          subs="657K"
          description="Do you want to become developer? Let's started!"
          timestamp="59 seconds ago"
          channel="Clever Programmer"
          title="Build LinkedIn clone on REACT.JS"
          image="https://i.ytimg.com/an_webp/f3EbDbm8XqY/mqdefault_6s.webp?du=3000&sqp=CNqV6KAG&rs=AOn4CLC0ZVj9QhTkaFAJG0X6Kyx6EaJO4Q"
        />
        <VideoRow
          views="1.4M"
          subs="657K"
          description="Do you want to become developer? Let's started!"
          timestamp="59 seconds ago"
          channel="Clever Programmer"
          title="Build AMAZONE clone on REACT.JS"
          image="https://i.ytimg.com/an_webp/RDV3Z1KCBvo/mqdefault_6s.webp?du=3000&sqp=CKqM6KAG&rs=AOn4CLBxTYuSE9KVdjgb1v83VNApuu-0bg"
        />
      </div>
    </>
  );
};

export default SearchPageFilter;
