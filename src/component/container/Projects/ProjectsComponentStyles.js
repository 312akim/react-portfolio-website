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
export const StyledSectionContainer = styled.div`
    text-align: center;
    position: relative;
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
    height: 100vh;
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
    width: 70%;
    height: 37vh;
    margin: 5vh auto 4vh auto;
    background: white;
    border-radius: 4px;

    @media (min-width: 1200px) {
        box-shadow: 16px 16px black;
    }
`

export const StyledProjectCardImage = styled.img`
    height: 27vh;
    width: auto;
    margin-left: -5%;
    margin-top: 5vh;

    @media (min-width: 480px) {
        margin-left: 0;
    }

    @media (min-width: 1200px) {
        height: 37vh;
        margin-top: 0;
    }
`

export const StyledProjectCardTitle = styled.h2`
    display: block;
    width: 75%;
    margin-left: 12.5%;
    color: white;
    height: 12%;
    background: ${({theme}) => theme.secondaryLight};
`

export const StyledProjectInformation = styled.div`
    height: 20%;
    width: 90%;
    margin: auto;
    opacity: 1;
    color: white;

    @media (min-width: 576px) {
        width: 65%;
    }

    @media (min-width: 768px) {
        margin-top: 10%;
    }
`

export const StyledReadMore = styled.button`
    height: 10%;
    margin-top: 25%;
    margin-bottom: 3%;
    color: white;
    background: ${({theme}) => theme.secondaryLight};

    @media (min-width: 576px) {
        margin-top: 18%;
    }

    @media (min-width: 768px) {
        margin-top: 10%;
    }
`

export const StyledGithubLink = styled.a`
    display: block;
    height: 13%;
    margin-bottom: 1vh;
    color: white;
`

export const StyledCardHoverContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    border-radius: 3.5px;
    
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