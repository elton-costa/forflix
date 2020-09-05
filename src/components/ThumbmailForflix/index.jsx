import React from 'react';
import PropTypes from 'prop-types';
import { Background, WrapperThumb, Thumb, Title, Timer } from './styles';
import AvatarForflix from '../AvatarForflix';

function ThumbmailForflix({ src, alt, avatar, channelName, title, timer }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarForflix photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Background>
  );
}

ThumbmailForflix.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
};

export default ThumbmailForflix;
