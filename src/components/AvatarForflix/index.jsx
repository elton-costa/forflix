import React from 'react';
import PropTypes from 'prop-types';
import { WrapperAvatar, Avatar, Channel } from './styles';

function AvatarForflix({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

AvatarForflix.propTypes = {
    photo: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
};

export default AvatarForflix;
