import styles, { keyframes } from 'styled-components';

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

export const StyledSectionContainer = styles.div`
    text-align: center;
`

export const StyledModalContainer = styles.div`

`

export const StyledSectionHeader = styles.h1`
    height: 10vh;
    margin: 0;
`

export const StyledProjectCard = styles.div`
    position: relative;
    width: 70%;
    height: 37vh;
    margin: 0 auto 2vh auto;
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
    position: block;
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
    margin-top: 10%;
    margin-bottom: 5%;
    color: white;
    background: blue;
`

export const StyledGithubLink = styles.div`
    height: 15%;
    margin-bottom: 2vh;
    color: white;
`

export const StyledCardHover = styles.div`
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
            animation: ${hoverCardTopFadeAnim} 0.8s linear;
        }

        ${StyledReadMore} {
            animation: ${hoverCardBotFadeAnim} 0.8s linear;
        }

        ${StyledGithubLink} {
            animation: ${hoverCardBotFadeAnim} 0.8s linear;
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