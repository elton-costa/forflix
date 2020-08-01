import React from 'react';
import HeaderForflix from './components/HeaderForflix';
import LogoForflix from './components/LogoForflix';
import ButtonForflix from './components/ButtonForflix';
import FooterForflix from  './components/FooterForflix';
import LogoImersao from './components/LogoImersao';
import BannerForflix from './components/BannerForflix';
import TagForflix from './components/TagForflix';
import TitleForflix from './components/TitleForflix';
import DescriptionForflix from './components/DescriptionForflix';

function App() {
  return (
    <>
      <HeaderForflix>
        <LogoForflix />
        <ButtonForflix>Novo vídeo</ButtonForflix>
      </HeaderForflix>

      <BannerForflix>
        <TagForflix>Entretenimento</TagForflix>
        <TitleForflix>Tudo sobre a quadrilogia RAMBO</TitleForflix>
        <DescriptionForflix>Vídeos semanais sobre cinema e histórias em quadrinhos, apresentados por Alexandre Callari, Bruno Zago e Daniel Lopes desde 2009.</DescriptionForflix>
      </BannerForflix>

      <FooterForflix>
        <LogoForflix />
        <p>Site feito na <a href="https://alura.com.br" target="_blank" rel="noopener noreferrer"><LogoImersao /></a></p>
      </FooterForflix>
    </>
  );
}

export default App;
