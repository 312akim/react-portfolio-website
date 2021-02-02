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

export const StyledAnimationContainer = styles.div`
    height: 30vh;
`

export const rotateAnimation = keyframes`
    0% {}
    50% {transform: rotate(0.5turn)}
    100% {transform: rotate(1turn)}
`

export const StyledDial = styles.img`
    display: block;
    margin: auto;
    height: 20vh;

    :hover {
        animation-name: ${rotateAnimation};
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }
`


export const StyledAnimationPointer = styles.div`
    height: 15px;
    width: 15px;
    margin-left: 50%;
    background: ${props => props.backgroundColor};
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