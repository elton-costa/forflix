import React from 'react';
import { Background, WrapperThumb, Thumb, Avatar, Channel } from './styles';
import AvatarForflix from '../AvatarForflix';

function ThumbmailForflix({src, alt, avatar, channelName}) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarForflix photo={avatar} channelName={channelName} />
                
            </WrapperThumb>
        </Background>
    );
}

export default ThumbmailForflix;