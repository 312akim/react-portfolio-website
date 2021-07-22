import styled from 'styled-components';
import { flexColumnCentered, flexRowCentered } from './SharedStyledComponentStyles';

interface SectionComponentInterface {
    height?: string,
    minHeight?: string,
    fontColor?: string,
    backgroundColor: (string: any) => string
}

export const StyledSectionComponent = styled.div<SectionComponentInterface>`
    ${flexColumnCentered};
    height: ${({height}) => height ? height : 'auto'};
    min-height: ${({minHeight}) => minHeight ? minHeight : 'auto'};
    color: ${({fontColor}) => fontColor ? fontColor: 'black'};
    background-color: ${({backgroundColor}) => backgroundColor};
    text-align: center;
    width: 100%;
`

export const StyledSectionHeader = styled.h1`
    height: 8vh;
    margin: 0 0 2vh 0;
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
        margin: 1vh 0 2vh 0;
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

interface DefaultButtonOptions {
    margin?: string
}

export const StyledDefaultButton = styled.button<DefaultButtonOptions>`
    ${flexRowCentered};
    border-radius: 4px;
    border: solid ${({theme}) => theme.primaryLight} 3px;
    width: 165px;
    padding: 5px 0px;
    background: ${({theme}) => theme.secondaryLight};
    color: ${({theme}) => theme.primaryLight};
    font-size: 1.1rem;
    font-weight: bold;
    margin: ${({margin}) => margin ? margin : '0'};

    :hover {
        cursor: pointer;
        background: ${({theme}) => theme.primaryLight};
        color: ${({theme}) => theme.secondaryLight};
    }
`