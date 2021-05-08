import styled, { keyframes } from 'styled-components';
import COLORS from '../design/colorTheme';

const navigationEntranceAnimation = keyframes`
    0% {
        padding-right: 0;
    }

    100% {
        padding-right: 5px;
    }
`

export const StyledReactScrollLinkContainer = styled.div`
    cursor: pointer;
    font-weight: 500;
    padding-bottom: 3vh;

    :hover {
        opacity: 1;
        padding-right: 5px;
        animation: ${navigationEntranceAnimation} 0.05s linear;
    }

    @media (min-width: 1024px) {
        padding-bottom: 2vh;
    }
`

export const StyledAnimatedUnderline = styled.div`
    position: absolute;
    align-text: center;
    width: 45%;
    right: 22px;
    background: black;
    height: 0.5vh;
    z-index: -1;
    margin-top: -2vh;
    box-shadow: 2px 2px ${COLORS.primaryLight};
`

export const StyledReactScrollLinkWrapper = styled.div`
    &: hover ${StyledAnimatedUnderline} {
        background: black;
        height: 2vh;
        margin-top: -4vh;
        width: 60%;
    }
`