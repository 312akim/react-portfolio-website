import styled, { keyframes } from 'styled-components';

export const StyledReactScrollLinkContainer = styled.div`
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 3vh;
    transition: padding-right 1s;
    margin-left: 0%;

    :hover {
        padding-right: 10px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 4vh;
    }
`

export const StyledAnimatedUnderline = styled.div`
    position: absolute;
    width: 40%;
    right: 12%;
    background: black;
    height: 0.5vh;
    margin-top: 3vh;
    z-index: -1;
    box-shadow: 2px 2px ${({theme}) => theme.primaryLight};
    transition: width 0.5s;

    @media (min-width: 1024px) {
        margin-top: 2vh;
        width: 29%;
        right: 13%;
    }

    @media (min-width: 1200px) {
        margin-top: 2vh;
        width: 35%;
        right: 45%;
    }
`

export const StyledReactScrollLinkWrapper = styled.div`
    &: hover ${StyledAnimatedUnderline} {
        width: 45%;

        @media (min-width: 1024px) {
            width: 35%;
        }

        @media (min-width: 1200px) {
            width: 40%;
        }
    }
`