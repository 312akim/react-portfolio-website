import styled, {keyframes} from 'styled-components';
import homeBackground from '../../../shared/images/home-background.jpg'

    // Animations
const homeContentMobileAnimation = (degreesX) => keyframes`
    0% {
        transform: rotateX(${degreesX}deg) scaleZ(2.5);
    }

    50% {

    }

    100% {
        transform: rotateX(0deg) scaleZ(2.5);
    }
`

const homeContentAnimation = (degreesY) => keyframes`
    0% {
        transform: rotateY(${degreesY}deg) scaleZ(2.5);
    }

    50% {

    }

    100% {
        transform: rotateY(0deg) scaleZ(2.5);
    }
`

    // Components
export const StyledHomeComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledHomeContentContainer = styled.div`
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${homeBackground});
    height: 100vh;
    width: 100vw;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const StyledLinkedinAnchorContainer = styled.a`
    color: ${({theme}) => theme.primaryLight};
    text-decoration: none;
    width: calc(100% - 12px);
    margin: 0;
`

export const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 384px;
    margin: 5vh 0;
`

export const StyledMainHeader = styled.h1`
    font-size: 54px;
    font-weight: 300;
    padding-right: 15%;
    padding-top: 1vh;
    margin: 0;
    font-family: 'Noto Serif KR', serif;

    @media (min-width: 768px) {
        padding-top: 3vh;
        font-size: 64px;
    }
`

export const StyledSubHeader = styled.h2`
    font-size: 36px;
    font-weight: 700;
    padding-left: 15%;
    margin: 0;
    font-family: 'Poppins', sans-serif;
`

export const StyledHomeLinkButton = styled.button`
    display: block;
    width: calc(100% - 12px);
    height: 8vh;
    margin: 2%;
    padding: 0;
    color: white;
    background: ${({theme}) => theme.primaryDark};
    cursor: pointer;
`

export const StyledHomeFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
`

export const StyledHomeFlexPairContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${({margin}) => margin ? margin : '0'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
    align-items: center;
`

export const StyledHomeNavWrapper = styled.div`
    perspective: 600px;
    perspective-origin: 50% 50%;
    display: ${({contentVisible}) => contentVisible ? 'block' : 'none'};
`

export const StyledHomeNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 343px;
    transform: rotateX(0deg) scaleZ(2.5);
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.3);
    animation: ${homeContentMobileAnimation(85)} 2s linear;
    max-height: 40vh;

    @media (min-width: 768px) {
        animation: ${homeContentAnimation(-85)} 2s linear;
    }
`

export const StyledTextContainerWrapper = styled.div`
    perspective: 600px;
    perspective-origin: 50% 50%;
    max-height: 50vh;
    display: ${({contentVisible}) => contentVisible ? 'block' : 'none'};
`

export const StyledTextContainer = styled.div`
    text-align: left;
    color: white;
    width: 343px;
    transform: rotateX(0deg) scaleZ(2.5);
    background: rgba(0, 0, 0, 0.3);
    animation: ${homeContentMobileAnimation(-85)} 2s linear;

    @media (min-width: 768px) {
        margin-bottom: 0;
        animation: ${homeContentAnimation(85)} 2s linear;
    }
`

export const StyledTextSection = styled.p`
    font-size: 24px;
    padding-left: 15%;
    padding-right: 10%;
    margin-bottom: 2vh;
    margin-top: 0;

    @media (min-width: 1200px) {
        font-size: 30px;
    }
`