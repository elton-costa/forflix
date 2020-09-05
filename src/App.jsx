import React from 'react';
import { HeaderForflix, Wrapper } from './components/HeaderForflix';
import LogoForflix from './components/LogoForflix';
import ButtonForflix from './components/ButtonForflix';
import FooterForflix from './components/FooterForflix';
import LogoImersao from './components/LogoImersao';
import { BannerForflix, Text } from './components/BannerForflix';
import TagForflix from './components/TagForflix';
import TitleForflix from './components/TitleForflix';
import DescriptionForflix from './components/DescriptionForflix';
import ThumbmailForflix from './components/ThumbmailForflix';
import Rocky from './assets/img/rocky.png';
import Phvox from './assets/img/Logo-phvox.jpg';

function App() {
  return (
    <>
      <HeaderForflix>
        <Wrapper>
          <LogoForflix />
          <ButtonForflix as="a" href="/video/new">
            Novo vídeo
          </ButtonForflix>
        </Wrapper>
      </HeaderForflix>

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

      <FooterForflix>
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
      </FooterForflix>
    </>
  );
}

export default App;
