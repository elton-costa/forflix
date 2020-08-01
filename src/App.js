import React from 'react';
import HeaderForflix from './components/HeaderForflix';
import LogoForflix from './components/LogoForflix';
import ButtonForflix from './components/ButtonForflix';
import FooterForflix from  './components/FooterForflix';
import LogoImersao from './components/LogoImersao';
import BannerForflix from './components/BannerForflix';
import TagForflix from './components/TagForflix';

function App() {
  return (
    <>
      <HeaderForflix>
        <LogoForflix />
        <ButtonForflix>Novo vídeo</ButtonForflix>
      </HeaderForflix>

      <BannerForflix>
        <TagForflix>Entretenimento</TagForflix>
      </BannerForflix>

      <FooterForflix>
        <LogoForflix />
        <p>Site feito na <a href="https://alura.com.br" target="_blank" rel="noopener noreferrer"><LogoImersao /></a></p>
      </FooterForflix>
    </>
  );
}

export default App;
