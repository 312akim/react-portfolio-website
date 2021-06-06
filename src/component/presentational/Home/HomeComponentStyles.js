import styled from 'styled-components';
import homeBackground from '../../../shared/images/home-background.jpg'

    // Components
export const StyledHomeComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledHomeNavWrapper = styled.div`
    perspective: 600px;
    perspective-origin: 50% 50%;
`

export const StyledHomeNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: rgba(191, 191, 191, 0.9);
    transform: rotateY(-21deg) scaleZ(2.5);
    opacity: 0.9;
    height: 360px;
    margin-bottom: 15px;

    transition: transform 1s;

    :hover {
        transform: rotateY(-8deg) scaleZ(2.5);
    }
`

export const StyledHomeContentContainer = styled.div`
    padding: 15vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${homeBackground});
    width: 100vw;
    margin-bottom: 21vh;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const StyledHomeAnimNav = styled.div`
    height: 80%;
    width: 80%;
    background: red;
    margin: auto;
`

export const StyledHomeLinkContainer = styled.div`
    width: 100%;
`

export const StyledHomeLinkIconTextContainer = styled.div`

`

export const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 18vh;
    width: 384px;
    margin-bottom: 3vh;
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
    margin: 2%;
    color: white;
    width: calc(100% - 12px);
    background: blue;
    height: 7vh;
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
`

export const StyledTextContainer = styled.div`
    text-align: left;
    color: white;
    width: 343px;
    margin-bottom: 6vh;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`

export const StyledTextSection = styled.p`
    font-size: 24px;
    padding-left: 15%;
    padding-right: 10%;
    margin-bottom: 3vh;
    margin-top: 0;

    @media (min-width: 1200px) {
        font-size: 30px;
    }
`