import styled, { keyframes } from 'styled-components';

export const StyledReactScrollLinkContainer = styled.div`
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 4vh;
    transition: padding-right 1s;
    margin-left: 0%;

    :hover {
        padding-right: 10px;
    }
`

export const StyledAnimatedUnderline = styled.div`
    position: absolute;
    width: 47%;
    right: 12%;
    background: black;
    height: 0.5vh;
    margin-top: 3vh;
    z-index: -1;
    box-shadow: 2px 2px ${({theme}) => theme.primaryLight};
    transition: width 0.5s;

    @media (min-width: 480px) {
        width: 32%;
    }

    @media (min-width: 768px) {
        width: 40%;
        right: 17%;
    }

    @media (min-width: 1024px) {
        margin-top: 2vh;
        width: 35%;
        right: 15%;
    }

    @media (min-width: 1200px) {
        margin-top: 2vh;
        width: 29%;
        right: 31%;
    }

    @media (min-width: 2560px) {
        margin-top: 2vh;
        width: 17%;
        right: 31%;
    }
`

export const StyledReactScrollLinkWrapper = styled.div`
    &: hover ${StyledAnimatedUnderline} {
        width: 45%;

        @media (min-width: 1024px) {
            width: 40%;
        }

        @media (min-width: 1200px) {
            width: 35%;
        }

        @media (min-width: 2560px) {
            width: 20%;
        }
    }
`