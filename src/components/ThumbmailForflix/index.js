import React from 'react';
import { Background, WrapperThumb, Thumb, Title, Timer } from './styles';
import AvatarForflix from '../AvatarForflix';

function ThumbmailForflix({src, alt, avatar, channelName, title, timer}) {
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

export default ThumbmailForflix;