import styled from 'styled-components';

export const StyledSectionComponent = styled.div`
    height: ${props => props.height ? props.height : 'auto'};
    color: ${props => props.fontColor ? props.fontColor: 'black'};
    background-color: ${props => props.backgroundColor};
    text-align: center;
    width: 100%;
`

export const StyledSectionHeader = styled.h1`
    height: 8vh;
    margin: 0;
    padding-top: 4vh;
    text-transform: uppercase;
    font-size: 1.8rem;

    @media (min-width: 480px) {
        font-size: 2rem;
    }
`

export const StyledSectionSubheader = styled.h2`
    height: 4vh;
    margin: 0;
    font-size: 1.3rem;

    @media (min-width: 480px) {
        font-size: 1.5rem;
    }
`

export const StyledSectionText = styled.p`
    font-size: 1.2rem;
    width: 70%;
    margin-top: 1vh;
    margin-left: 15%;
    text-align: left;
`