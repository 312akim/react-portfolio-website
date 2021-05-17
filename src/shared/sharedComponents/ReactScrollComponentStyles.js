import styled, { keyframes } from 'styled-components';

export const StyledReactScrollLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 6vh;
    transition: padding-right 1s;

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

    @media (min-width: 489px) {
        right: 20%;
    }

    @media (min-width: 768px) {
        right: 17%;
        margin-top: 7vh;
    }

    @media (min-width: 1024px) {
        right: 15%;
        margin-top: 5vh;
    }

    @media (min-width: 1200px) {
        right: 45%;
        margin-top: 6vh;
    }

    @media (min-width: 2560px) {
        margin-top: 5vh;
        right: 60%;
    }
`

export const StyledIconTextWrapper = styled.div`
`

export const StyledReactScrollLinkWrapper = styled.div`
    &: hover ${StyledAnimatedUnderline} {
        width: 55%;

        @media (min-width: 480px) {
            width: 45%;
        }

        @media (min-width: 768px) {
            width: 50%;
        }

        @media (min-width: 1024px) {
            width: 40%;
        }

        @media (min-width: 1200px) {
            width: 40%;
        }

        @media (min-width: 2560px) {
            width: 30%;
        }
    }
`