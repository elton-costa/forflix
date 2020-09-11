import React from 'react';
import FooterStyle from './styles';
import LogoForflix from '../LogoForflix';
import LogoImersao from '../LogoImersao';

function FooterOpen() {
  return (
    <FooterStyle>
        <LogoForflix />
        <p>
          Site feito na
          <a
            href="https://alura.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoImersao />
          </a>
        </p>
    </FooterStyle>
  )
}

export default FooterOpen;




