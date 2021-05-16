import styled, { keyframes } from 'styled-components';

export const StyledReactScrollLinkContainer = styled.div`
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 6vh;
    transition: padding-right 1s;
    margin-left: 0%;

    :hover {
        padding-right: 10px;
    }
`

export const StyledReactScrollIconLinkWrapper = styled.div`
    text-align: center;
`

export const StyledReactScrollIconLinkContainer = styled.div`
    cursor: pointer;
    margin-bottom: 4vh;
    transition: padding-right 1s;
    margin-left: 0%;

    :hover {
        padding-right: 10px;
    }
`

export const StyledAnimatedUnderline = styled.div`
    position: absolute;
    width: 0%;
    right: 12%;
    background: black;
    height: 0.5vh;
    margin-top: 9vh;
    z-index: -1;
    box-shadow: 2px 2px ${({theme}) => theme.primaryLight};
    transition: width 0.5s;

    @media (min-width: 768px) {
        right: 17%;
        margin-top: 7vh;
    }

    @media (min-width: 1024px) {
        right: 15%;
        margin-top: 5vh;
    }

    @media (min-width: 1200px) {
        right: 31%;
        margin-top: 6vh;
    }

    @media (min-width: 2560px) {
        right: 31%;
        margin-top: 5vh;
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