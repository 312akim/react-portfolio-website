import styles, { keyframes } from 'styled-components';

export const StyledNameContainer = styles.div`
    height: 18vh;
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

//  Fades in from right hand side & Simulates momentum.
export const entranceAnimation = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        transform: rotate(-0.1turn)
    }
    33% {
        opacity: 0;
        transform: translateX(300px)
    }
    50% {
        transform: rotate(0.08turn)
    }
    66% {
        opacity: 1;
        transform: rotate(-0.06turn)
    }
    75% {
        transform: rotate(0.03turn)
    }
    90% {
        transform: rotate(-0.01turn)
        transform: translateX(0px)
    }
    100% {
    }
`

export const StyledAnimationContainer = styles.div`
    display: block;
    height: 32vh;
    width: 94%;

    @media (min-width: 576px) {
        height: 33vh;
        width: 80%;
    }
`

export const StyledActiveAnimation = styles.div`
    display: inline-block;
    animation: ${entranceAnimation} 3s ease-in;
`

export const StyledSelector = styles.img`
    display: inline-block;
    margin-right: 1vw;
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

export const homeDialAnimation = keyframes`
    0% {}
    100% {transform: rotate(1turn)}
`

export const StyledDial = styles.img`
    display: inline-block;
    height: 30vh;
    padding-left: 1vw;
    animation: ${props => (props.active? homeDialAnimation : "")}
    animation-duration: 2s;
    

    @media (min-width: 1200px) {
        padding-left: 2vw;
    }
`

export const StyledDialButtonContainer = styles.div`
    display: block;
    height: 6vh;
`

export const StyledDialButton = styles.button`
    display: inline-block;
    margin-left: 6vw;
    color: white;
    width: 14vw;
    background: black;
    height: 80%;
`

export const StyledTextContainer = styles.div`
    height: 43vh;
    text-align: left
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