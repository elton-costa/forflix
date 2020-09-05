import styled from 'styled-components';
import container from '../../styles/Tools/container';
import TagForflix from '../TagForflix';
import TitleForflix from '../TitleForflix';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  ${TagForflix} {
    margin-bottom: 40rem;
  }

  ${TitleForflix} {
    margin-bottom: 20rem;
  }
`;

export const BannerForflix = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
`;
