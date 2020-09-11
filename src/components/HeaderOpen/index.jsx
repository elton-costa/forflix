import React from 'react';
import {HeaderForflix, Wrapper} from './styles';
import LogoForflix from '../LogoForflix';
import ButtonForflix from '../ButtonForflix';

function HeaderOpen() {
  return (
    <HeaderForflix>
        <Wrapper>
          <LogoForflix />
          <ButtonForflix as="a" href="/video/new">
            Novo vídeo
          </ButtonForflix>
        </Wrapper>
    </HeaderForflix>

  );
}

export default HeaderOpen;