import styled from 'styled-components';
import { flexColumnCentered } from './SharedStyledComponentStyles';

export const StyledSectionComponent = styled.div`
    height: ${props => props.height ? props.height : 'auto'};
    min-height: ${props => props.minHeight ? props.minHeight : 'auto'};
    color: ${props => props.fontColor ? props.fontColor: 'black'};
    background-color: ${props => props.backgroundColor};
    text-align: center;
    width: 100%;
    ${flexColumnCentered};
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
    min-height: 5vh;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2vh 0 1vh 0;
    font-size: 1.6rem;

    @media (min-width: 768px) {
        margin: 1vh 0 0 0;
        min-height: 4vh;
    }
`

export const StyledSectionText = styled.p`
    font-size: 1.2rem;
    width: 70%;
    margin-top: 1vh;
    margin-left: 15%;
    text-align: left;
`