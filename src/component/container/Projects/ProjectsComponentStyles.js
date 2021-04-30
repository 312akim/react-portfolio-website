import styled, { keyframes } from 'styled-components';
import COLORS from '../../../shared/design/colorTheme';

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

export const switchIconAnim = keyframes`
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(15px);
    }

    100%: {
        transform: translateX(0px);
    }
`

export const entranceProjectCard = keyframes`
    0% {
        transform: translateX(-75vw);
    }

    100%: {
        transform: translateX(0px);
    }
`

export const entranceAltProjectCard = keyframes`
    0% {
        transform: translateX(75vw);
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
    animation: ${switchIconAnim} 1.5s linear infinite;

    @media (min-width: 768px) {
        color: white;
    }
`

export const StyledProjectCardsContainer = styled.div`
    background: ${COLORS.primaryDark};
    animation: ${entranceProjectCard} 0.7s linear;
`

export const StyledAltProjectCardsContainer = styled.div`
    background: ${COLORS.primaryDark};
    animation: ${entranceAltProjectCard} 0.7s linear;
`

export const StyledSectionSwitcher = styled.div`
    position: absolute;
    height: 100vh;
    width: 15%;
    background: ${COLORS.primaryDark};
    right: ${props => props.position};
    z-index: 1;
    animation: ${fadeInAnimation} 1s linear;
    
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
    margin: 0 auto 5vh auto;
    border: 1px solid black;
`


export const StyledProjectCardImage = styled.img`
    width: 100%;
    height: auto;

    @media (min-width: 576px) {
        height: 100%;
        width: auto;
    }
`
export const StyledProjectCardTitle = styled.h2`
    display: block;
    width: 75%;
    margin-left: 12.5%;
    color: white;
    height: 12%;
    background: ${COLORS.secondaryLight };
`

export const StyledProjectInformation = styled.div`
    height: 20%;
    width: 70%;
    margin: auto;
    opacity: 1;
    color: white;
`

export const StyledReadMore = styled.button`
    height: 10%;
    margin-top: 12%;
    margin-bottom: 3%;
    color: white;
    background: ${COLORS.secondaryLight };
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
export const StyledModalContainer = styled.div`
    height: 100vh;
    position: absolute;
    top: 0;
    left: -20%;
    width: 140%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);

    animation: ${fadeInAnimation} 1s linear;
`

export const StyledModalHero = styled.div`
    color: red;
    height: 80vh;
    background: orange;
    margin: 7.5% 15% 7.5% 15%;
`

export const StyledModalHeroTitle = styled.div`

`

export const StyledModalText = styled.div`

`

export const StyledModalSubHeader = styled.div`

`

export const StyledModalSubText = styled.div`

`