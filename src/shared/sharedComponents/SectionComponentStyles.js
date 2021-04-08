import styled from 'styled-components';

export const StyledSectionComponent = styled.div`
    height: ${props => props.height ? props.height : '100vh'};
    background-color: ${props => props.backgroundColor};
    text-align: center;
    
    @media (min-width: 1200px) {
        padding: 0 15%;
    }
`

export const StyledSectionHeader = styled.h1`
    height: 8vh;
    margin: 0;
    padding-top: 4vh;
`

export const StyledSectionSubheader = styled.h2`
    height: 4vh;
    margin: 0;
`

export const StyledSectionText = styled.p`
    font-size: 1.2rem;
    width: 70%;
    margin-top: 1vh;
    margin-left: 15%;
    text-align: left;
`