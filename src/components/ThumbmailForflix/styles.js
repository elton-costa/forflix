import styled from 'styled-components';
import { WrapperAvatar } from '../AvatarForflix/styles';

export const Thumb = styled.img`
    width: 100%;
    transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure `
    position: relative;
    border: var(--border) solid var(--color-primary-medium);
    width: 600px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;

    & > ${WrapperAvatar} {
        position: absolute;
        top: var(--space);
        left: var(--space);
        margin-right: 10rem;
        transform: translateX(calc((100% + var(--space)) * -1));
        opacity: 0;
        transition: transform 200ms linear, opacity 100ms linear;
    }
`;

export const Background = styled.div`
    --space: 10rem;
    --border: 2rem;
    --move-space: calc(var(--space) * -1);

    position: relative;
    background-color: var(--color-primary-medium);

    &::before,
    &::after {
        content:'';
        position: absolute;
        width: calc(var(--space) * 1.4);
        height: calc(var(--space) * 1.4);
        background-color: var(--color-primary-medium);
        transition: transform 100ms linear;
    }

    &::before{
        right: 0;
        top: 0;
        transform-origin: right top;
        transform: rotate(45deg) scale(0);
    }

    &::after {
        left: 0;
        bottom: 0;
        transform-origin: left bottom;
        transform: rotate(-45deg) scale(0);
        z-index: -1;
    }

    &:hover {
        &::before {
            transform: rotate(45deg) scale(1);
        }
        &::after {
            transform: rotate(-45deg) scale(1);
        }



        & > ${WrapperThumb} {
            transform: translate(var(--move-space), var( --move-space));
            
            & > ${Thumb} {
                filter: brightness(0.3);
            }

            & > ${WrapperAvatar} {
                transform: translateX(0);
                opacity: 1;
                transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
            }
        }
    }
`;