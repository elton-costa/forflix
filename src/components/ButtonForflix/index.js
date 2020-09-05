import styled from 'styled-components';

const ButtonForflix = styled.button`
  padding: 10rem 20rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 16rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 200ms linear, transform 200ms linear;

  &:hover {
    background-color: var(--color-primary-medium);
    transform: scale(1.1);
  }

  &:active {
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.9);
  }
`;

export default ButtonForflix;
