import React from 'react';
import { BannerForflix, Text } from './components/BannerForflix';
import TagForflix from './components/TagForflix';
import TitleForflix from './components/TitleForflix';
import DescriptionForflix from './components/DescriptionForflix';
import ThumbmailForflix from './components/ThumbmailForflix';
import Rocky from './assets/img/rocky.png';
import Phvox from './assets/img/Logo-phvox.jpg';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import SectionForflix from './components/SectionForflix';

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerForflix>
        <Text>
          <TagForflix>Entretenimento</TagForflix>
          <TitleForflix>
            ROCKY II: Um exemplo de LUTA contra si mesmo.
          </TitleForflix>
          <DescriptionForflix>
            Uma conversa sobre o desenrolar do filme e de como o Rocky Balboa é
            um exemplo de campeão.
          </DescriptionForflix>
        </Text>
        <ThumbmailForflix
          src={Rocky}
          alt="Thumbmail do Vídeo sobre o filme Rocky II"
          title="ROCKY II: Um exemplo de LUTA contra si mesmo."
          avatar={Phvox}
          channelName="Canal PHVox"
          timer="01:30:00"
        />
      </BannerForflix>

      <SectionForflix>
        <TagForflix>Meus vídeos favoritos</TagForflix>
        <DescriptionForflix>
        Esta seção é destinada para armazenamento e visualização dos meus vídeos favoritos do YouTube.
        </DescriptionForflix>
      </SectionForflix>
      <FooterOpen />
    </>
  );
}

export default App;
