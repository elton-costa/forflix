import React from 'react';
import { Background, WrapperThumb, Thumb, Title } from './styles';
import AvatarForflix from '../AvatarForflix';

function ThumbmailForflix({src, alt, avatar, channelName, title}) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarForflix photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbmailForflix;