import styled from 'styled-components';

export const ReactScrollLinkWrapper = styled.div`
    cursor: pointer;
    font-weight: 500;
    padding-bottom: 3vh;

    :hover {
        opacity: 1.2;
        padding-right: 10px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 2vh;
    }
`