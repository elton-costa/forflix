import styled from 'styled-components';
import TagForflix from '../TagForflix';


const SectionForflix = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50rem;

  & > ${TagForflix}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }
`;

export default SectionForflix;