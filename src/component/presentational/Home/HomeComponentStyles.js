import styled from 'styled-components';

    // Components
export const StyledHomeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 343px;
`

export const StyledHomeNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 343px;
    background: rgba(191, 191, 191, 0.9);
`

export const StyledHomeHeaderContainer = styled.div`
    margin-bottom: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 1200px) {
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
    width: 343px;
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

    @media (min-width: 1200px) {
        font-size: 96px;
    }
`

export const StyledSubHeader = styled.h2`
    font-size: 36px;
    font-weight: 700;
    padding-left: 15%;
    margin: 0;
    font-family: 'Poppins', sans-serif;

    @media (min-width: 1200px) {
        font-size: 54px;
    }
`

export const StyledHomeLinkButton = styled.button`
    display: block;
    margin: 2%;
    color: white;
    width: calc(100% - 12px);
    background: black;
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
    height: 43vh;
    text-align: left
`

export const StyledTextSection = styled.p`
    font-size: 24px;
    padding-left: 15%;
    padding-right: 10%;
    margin-bottom: 3vh;
    margin-top: 0;

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`