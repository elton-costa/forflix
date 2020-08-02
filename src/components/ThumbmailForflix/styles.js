import styled from 'styled-components';

export const Avatar = styled.img`
    position: absolute;
    top: 10rem;
    left: 10rem;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    transform: translateX(calc((100% + 10rem) * -1));
    transition: transform 100ms linear;
`;

export const Thumb = styled.img`
    width: 100%;
`;

export const WrapperThumb = styled.figure `
    position: relative;
    border-radius: 4px;
    border: 2rem solid var(--color-catogory-video);
    width: 600px;
    overflow: hidden;

&:hover{
    & > ${Avatar} {
        transform: translateX(0);
    }
}
    
`;