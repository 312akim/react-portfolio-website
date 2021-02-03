import styles, { keyframes } from 'styled-components';

export const StyledNameContainer = styles.div`
    text-align: center;
    height: 20vh;
`

export const StyledMainHeader = styles.h1`
    font-size: 64px;
    font-weight: 300;
    padding-right: 15%;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 96px;
    }
`

export const StyledSubHeader = styles.h2`
    font-size: 36px;
    font-weight: 700;
    padding-left: 15%;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 54px;
    }
`

//  Comes in fast from right hand side.
export const entranceAnimation = keyframes`
    0% {
        opacity: 0;
        margin-left: 10vw;
    }
    50% {
        opacity: 0;
        margin-left: 10vw;
    }
    100% {
        opacity: 1;
        margin-left: 0;
    }
`

export const StyledAnimationContainer = styles.div`
    display: block;
    height: 33vh;
`

export const StyledActiveAnimation = styles.div`
    display: inline-block;
    animation: ${entranceAnimation} 2s ease-in;
`

export const StyledSelector = styles.img`
    display: inline-block;
    margin-left: 7vw;
    height: 6vh;
    padding-top: 12vh;
    padding-bottom: 12vh;
    transform: rotate(0.125turn);

    @media (min-width: 576px) {
        margin-left: 16vw;   
    }

    @media (min-width: 1200px) {
        margin-left: 22vw;
    }
`

// Simulates momentum of dial from entrace.
export const rotateAnimation = keyframes`
    0% {}
    25% {transform: rotate(-0.1turn)}
    50% {transform: rotate(0.08turn)}
    75% {transform: rotate(-0.06turn)}
    90% {transform: rotate(0.03turn)}
    100% {}
`

export const StyledDial = styles.img`
    display: inline-block;
    height: 30vh;
    padding-left: 4vw;


    @media (min-width: 1200px) {
        padding-left: 2vw;
    }

    animation-name: ${rotateAnimation};
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;

`

export const StyledDialButtonContainer = styles.div`
    display: block;
    height: 6vh;
`

export const StyledDialButton = styles.button`
    display: inline-block;
    margin-left: 7vw;
    color: white;
    width: 15vw;
    background: black;
    height: 80%;
`

export const StyledTextContainer = styles.div`
    height: 40vh;
`

export const StyledTextSection = styles.p`
    font-size: 24px;
    padding-left: 15%;
    padding-right: 10%;
    margin-bottom: 3vh;
    margin-top: 0;

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`