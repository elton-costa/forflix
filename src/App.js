import React from 'react';
import HeaderForflix from './components/HeaderForflix';
import LogoForflix from './components/LogoForflix'
import ButtonForflix from './components/ButtonForflix';

function App() {
  return (
    <HeaderForflix>
      <LogoForflix />
      <ButtonForflix>Novo vídeo</ButtonForflix>
    </HeaderForflix>
  );
}

export default App;
