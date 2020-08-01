import styled from 'styled-components';
import ButtonForflix from '../ButtonForflix';
import LogoForflix from '../LogoForflix';

const HeaderForflix = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rem 30rem;
    background-color: var(--color-black-dark);
    border-bottom: 2px solid var(--color-primary-medium);

    @media (max-width: 800px) {
        justify-content: center;
        padding: 15px 16px;

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

export default HeaderForflix;