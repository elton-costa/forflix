import styled, {css} from 'styled-components';

const TagForflix = styled.h2`
  display: inline-block;
  font-size: 36rem;
  background-color: var(--color-primary-medium);
  padding: 16rem 14rem;
  color: var(--color-gray-light);

  ${({small}) => 
    small && 
    css`
      font-size: 20rem;
      padding: 8rem 10rem;
      margin-top: 40rem;
    `};
`;

export default TagForflix;
