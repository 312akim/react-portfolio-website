import styles, { keyframes } from 'styled-components';
import COLORS from '../../../shared/design/colorTheme';

// Animations
export const hoverCardTopFadeAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const hoverCardBotFadeAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const hoverSwitcherAnim = keyframes`
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

export const fadeInProjectSwitcher = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

// Components
export const StyledSectionContainer = styles.div`
    text-align: center;
`

export const StyledSectionIconContainer = styles.div`
    display: inline-block;
    color: black;
    height: 100vh;
    margin-top: 47vh;
`

export const StyledProjectCardsContainer = styles.div`
    background: ${COLORS.primaryDark};
    animation: ${entranceProjectCard} 0.7s linear;
`

export const StyledAltProjectCardsContainer = styles.div`
    background: ${COLORS.primaryDark};
    animation: ${entranceAltProjectCard} 0.7s linear;
`

export const StyledSectionSwitcher = styles.div`
    position: absolute;
    height: 100vh;
    width: 15%;
    background: ${COLORS.primaryDark};
    right: ${props => props.position};
    z-index: 1;
    animation: ${fadeInProjectSwitcher} 1s linear;

    :hover {
        background: black;
    }
    
    :hover div {
        animation: ${hoverSwitcherAnim} 1.5s linear infinite;
        color: white;
    }
`

export const StyledModalContainer = styles.div`

`

export const StyledSectionHeader = styles.h1`
    height: 10vh;
    margin: 0;
    padding-top: 4vh;
`

export const StyledProjectCard = styles.div`
    position: relative;
    width: 70%;
    height: 37vh;
    margin: 0 auto 5vh auto;
    border: 1px solid black;
`


export const StyledProjectCardImage = styles.img`
    width: 100%;
    height: auto;

    @media (min-width: 576px) {
        height: 100%;
        width: auto;
    }
`
export const StyledProjectCardTitle = styles.h2`
    display: block;
    width: 40vw;
    margin-left: calc(50% - 20vw);
    color: white;
    height: 15%;
    background: blue;
`

export const StyledProjectInformation = styles.div`
    height: 20%;
    width: 70%;
    margin: auto;
    opacity: 1;
    color: white;
`

export const StyledReadMore = styles.button`
    height: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    color: white;
    background: blue;
`

export const StyledGithubLink = styles.a`
    display: block;
    height: 15%;
    margin-bottom: 2vh;
    color: white;
`

export const StyledCardHoverContainer = styles.div`
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

export const StyledModalHero = styles.div`

`

export const StyledModalHeroTitle = styles.div`

`

export const StyledModalText = styles.div`

`

export const StyledModalSubHeader = styles.div`

`

export const StyledMoalSubText = styles.div`

`