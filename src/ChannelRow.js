import React from 'react';
import { Avatar } from '@mui/material';
import './ChannelRow.css';
import { CheckCircleOutlineOutlined as VerifiedIcon } from '@mui/icons-material';
const ChannelRow = ({
  image,
  channel,
  subs,
  numOfVideos,
  description,
  verified,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers {numOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
