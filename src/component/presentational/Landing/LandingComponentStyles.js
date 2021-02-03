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
    0% {margin-left: 120vw;}
    50% {margin-left: 120vw;}
    100% {margin-left: 0;}
`

export const StyledAnimationContainer = styles.div`
    display: block;
    height: 30vh;
`

export const StyledActiveAnimation = styles.div`
    display: inline-block;
    animation: ${entranceAnimation} 2s ease-in;
`

export const StyledSelector = styles.img`
    display: inline-block;
    height: 30vh;
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

    animation-name: ${rotateAnimation};
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;

`

export const StyledTextContainer = styles.div`
    height: 50vh;
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