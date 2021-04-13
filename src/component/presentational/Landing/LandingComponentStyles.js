import styled, { keyframes } from 'styled-components';

    // Components
    
// New animation attempt
export const StyledAnimationContainer = styled.div`
    display: block;
    height: 32vh;
    width: 94%;
    background: grey;
    margin: 5% auto 0 auto;

    @media (min-width: 576px) {
        height: 33vh;
        width: 80%;
    }
`

export const StyledLandingAnimNav = styled.div`
    height: 80%;
    width: 80%;
    background: red;
    margin: auto;
`
//New animation attempt end

export const StyledNameContainer = styled.div`
    margin-top: 6vh;
    height: 18vh;
`

export const StyledMainHeader = styled.h1`
    font-size: 64px;
    font-weight: 300;
    padding-right: 15%;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 96px;
    }
`

export const StyledSubHeader = styled.h2`
    font-size: 36px;
    font-weight: 700;
    padding-left: 15%;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 54px;
    }
`

export const StyledDialButtonContainer = styled.div`
    display: block;
    height: 6vh;
`

export const StyledDialButton = styled.button`
    display: inline-block;
    margin: 2%;
    color: white;
    width: 15%;
    background: black;
    height: 80%;
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