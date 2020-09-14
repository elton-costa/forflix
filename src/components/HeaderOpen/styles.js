import styled from 'styled-components';
import ButtonForflix from '../ButtonForflix';
import LogoForflix from '../LogoForflix';


export const HeaderForflix = styled.header`
  padding: 20rem 30rem;
  background-color: var(--color-black-dark);
  border-bottom: 2px solid var(--color-primary-medium);

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;

    & > ${LogoForflix} {
      height: 30px;
    }

    & > ${ButtonForflix} {
      background-color: var(--color-primary-medium);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;
