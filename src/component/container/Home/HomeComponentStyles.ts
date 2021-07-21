import styled, {keyframes} from 'styled-components';
import homeBackground from '../../../shared/images/home-background.jpg'
import { flexColumnCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';

    // Animations
const homeContentMobileAnimation = (degreesX: number, marginLeft: string) => keyframes`
    0% {
        transform: rotateX(${degreesX}deg) scaleZ(2.5);
        margin-left: ${marginLeft};
        opacity: 0;
    }

    50% {
        transform: rotateX(${degreesX}deg) scaleZ(2.5);
        margin-left: 0;
    }

    100% {
        transform: rotateX(0deg) scaleZ(2.5);
        opacity: 1;
    }
`

const homeContentAnimation = (degreesY: number, marginLeft: string) => keyframes`
    0% {
        transform: rotateY(${degreesY}deg) scaleZ(2.5);
        margin-left: ${marginLeft};
        opacity: 0;
    }

    50% {
        transform: rotateY(${degreesY}deg) scaleZ(2.5);
        margin-left: 0;
        opacity: 1;
    }

    100% {
        transform: rotateY(0deg) scaleZ(2.5);
    }
`
    // Reuseable Interfaces
interface DisplayContent {
    contentVisible?: boolean
}


    // Components
export const StyledHomeComponentContainer = styled.div`
    ${flexColumnCentered};
`

export const StyledHomeContentContainer = styled.div`
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url(${homeBackground});
    height: 100vh;
    width: 100vw;

    @media (min-width: 768px) {
        justify-content: center;
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
    ${flexColumnCentered};
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

    :hover {
        background: ${({theme}) => theme.secondaryLight};
        border: 1px solid white;
    }
`

interface HomeFlexContainer {
    margin?: string
}

export const StyledHomeFlexContainer = styled.div<HomeFlexContainer>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${({margin}) => margin ? margin : '0 0 0 30px'};
`

interface HomeFlexPairContainer {
    margin?: string,
    justifyContent?: string
}

export const StyledHomeFlexPairContainer = styled.div<HomeFlexPairContainer>`
    display: flex;
    flex-direction: row;
    margin: ${({margin}) => margin ? margin : '0'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
    align-items: center;
`

export const StyledHomeNavWrapper = styled.div<DisplayContent>`
    perspective: 600px;
    perspective-origin: 50% 50%;
    display: ${({contentVisible}) => contentVisible ? 'block' : 'none'};
`

export const StyledHomeNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 343px;
    transform: rotateX(0deg) scaleZ(2.5);
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.3);
    animation: ${homeContentMobileAnimation(85, '100%')} 1.5s linear;
    height: 40vh;

    @media (min-width: 768px) {
        animation: ${homeContentAnimation(-85, '100%')} 1.5s linear;
    }
`

export const StyledTextContainerWrapper = styled.div <DisplayContent>`
    perspective: 600px;
    perspective-origin: 50% 50%;
    display: ${({contentVisible}) => contentVisible ? 'block' : 'none'};
`

export const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    color: white;
    width: 343px;
    transform: rotateX(0deg) scaleZ(2.5);
    background: rgba(0, 0, 0, 0.3);
    animation: ${homeContentMobileAnimation(-85, '-100%')} 1.5s linear;

    height: 40vh;

    @media (min-width: 768px) {
        margin-bottom: 0;
        animation: ${homeContentAnimation(85, '-100%')} 1.5s linear;
    }
`

export const StyledTextSection = styled.p`
    font-size: 24px;
    padding-left: 15%;
    padding-right: 10%;
    margin-bottom: 2vh;
    margin-top: 0;
`