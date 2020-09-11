import styled from 'styled-components';
import LogoForflix from '../LogoForflix';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  padding: 20rem 0;
  border-top: 2px solid var(--color-primary-medium);

  & > ${LogoForflix} {
    margin-bottom: 14rem;
  }
`;

export default FooterStyle;
