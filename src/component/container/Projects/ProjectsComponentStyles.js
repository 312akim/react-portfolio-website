import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring'

// Animations
const hoverCardTopFadeAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const hoverCardBotFadeAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const switchIconAnim = (x) => keyframes`
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(${x}px);
    }

    100%: {
        transform: translateX(0px);
    }
`

export const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

// Components
export const StyledSectionContainerWrapper = styled.div`
    height: auto;
    padding-bottom: 4vh;
`

export const StyledSectionContainerContent = styled.div`
    text-align: center;
    position: relative;
    width: 100vw;
`

export const StyledSectionIconContainer = styled.div`
    display: inline-block;
    color: white;
    height: 53vh;
    margin-top: 47vh;
    animation: ${switchIconAnim(7)} 1.2s linear infinite;

    @media (min-width: 768px) {
        color: white;
        animation: ${switchIconAnim(15)} 1.5s linear infinite;
    }
`

export const StyledProjectAnimatedContainer = styled(animated.div)`
    transform-style: preserve-3d;
`

export const StyledProjectCardsContainer = styled.div`
    background: ${({theme}) => theme.primaryDark};
`

export const StyledAltProjectCardsContainer = styled(animated.div)`
    background: ${({theme}) => theme.primaryDark};
    transform: rotateY(180deg);
`

export const StyledSectionSwitcher = styled.div`
    position: absolute;
    height: 106vh;
    width: 15%;
    background: ${({theme}) => theme.primaryDark};
    right: ${props => props.position};
    animation: ${fadeInAnimation} 1s linear;
    z-index: 1;
    
    :hover div {
        animation: ${switchIconAnim} 1.5s linear infinite;
        color: white;
    }

    @media (min-width: 768px) {
        :hover {
            background: black;
        }
        :hover div {
            animation: ${switchIconAnim} 1.5s linear infinite;
            color: white;
        }
    }
`

export const StyledProjectCard = styled.div`
    position: relative;
    width: 60%;
    max-width: 768px;
    height: 40vh;
    margin: 5vh auto 4vh auto;
    background: white;
    border-radius: 4px;
    box-shadow: 8px 8px black;

    @media (min-width: 480px) {
        box-shadow: 12px 12px black;
    }

    @media (min-width: 1200px) {
        box-shadow: 16px 16px black;
    }
`

export const StyledProjectCardImage = styled.img`
    height: 40vh;
    width: auto;
    margin-left: -30%;

    @media (min-width: 480px) {
        margin-left: -15%;
    }

    @media (min-width: 500px) {
        margin-left: 0%;
    }

    @media (min-width: 1200px) {
        height: 40vh;
        margin-top: 0;
    }
`

export const StyledProjectCardTitle = styled.h2`
    display: block;
    max-height: 8vh;
    width: 75%;
    margin: 1vh 12.5%;
    color: white;
    background: ${({theme}) => theme.secondaryLight};
`

export const StyledProjectInformation = styled.div`
    height: 20vh;
    width: 75%;
    margin: 0 12.5% 1vh 12.5%;
    color: white;
    background: red;
`

export const StyledReadMore = styled.button`
    height: 3.5vh;
    margin-bottom: 1vh;
    color: white;
    background: ${({theme}) => theme.secondaryLight};
`

export const StyledGithubLink = styled.a`
    display: block;
    height: 3.5vh;
    color: white;
`

export const StyledCardHoverContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    border-radius: 3.2px;
    height: 40vh;
    
    :hover {
        opacity: 0.8;
        background: black;

        ${StyledProjectCardTitle} {
            animation: ${hoverCardTopFadeAnim} 0.3s linear;
        }

        ${StyledProjectInformation} {
            animation: ${hoverCardTopFadeAnim} 0.3s linear;
        }

        ${StyledReadMore} {
            animation: ${hoverCardBotFadeAnim} 0.3s linear;
        }

        ${StyledGithubLink} {
            animation: ${hoverCardBotFadeAnim} 0.3s linear;
        }
    }
`
//Project Modals
export const StyledModalWrapper = styled.div`
    height: 100vh;
    position: absolute;
    top: 0;
    left: -25%;
    width: 150%;
    background: rgba(0, 0, 0, 0.7);
    animation: ${fadeInAnimation} 1s linear;
    z-index: 3;
`

export const StyledModalContentContainer = styled.div`
    background: orange;
    height: 80%;
    margin: 5% 15% 5% 15%;
`

export const StyledModalHero = styled.div`
    color: red;
    height: 5%;
`

export const StyledModalHeroTitle = styled.div`

`

export const StyledModalText = styled.div`
    height: 90%;
`

export const StyledModalSubHeader = styled.div`

`

export const StyledModalSubText = styled.div`

`