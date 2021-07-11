import styled from 'styled-components';
import { flexColumnCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';

//Animations

//Styles
export const StyledActivitySectionContainer = styled.div`
    width: 100vw;
    padding-bottom: 4vh;
`

export const StyledCommitListWrapper = styled.div`
    ${flexColumnCentered};
    padding-top: 6vh;
`

export const StyledCommitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 343px;
    padding-bottom: 3vh;

    @media (min-width: 768px) {
        width: 688px;
    }
`


export const StyledCommitTitle = styled.div`
    align-self: center;
    padding: 0 6px 3px 6px;
    color: ${({theme}) => theme.primaryLight};
    font-size: 1.6rem;
    font-weight: bold;
    background: black;
    width: auto;
    box-shadow: 3px 2px 2px ${({theme}) => theme.secondaryLight};
    border-radius: 4px;

    @media (min-width: 768px) {
        align-self: start;
        margin-left: 5%;
    }
`

export const StyledCommitDataWrapper = styled.div`
    overflow-y: auto;
`

export const StyledCommitDate = styled.div`
    display: inline-block;
    color: ${({theme}) => theme.primaryLight};
    margin: 0.3rem;
    font-size: 1rem;
`

export const StyledCommitComment = styled.div`
    color: ${({theme}) => theme.primaryLight};
    margin: 0.1rem 5%;
`

export const StyledCommitGitAnchor = styled.a`
    color: ${({theme}) => theme.primaryLight};
`

export const StyledCommitDataContainer = styled.div`
    border: 1px ${({theme}) => theme.secondaryLight} solid;
    width: 90%;
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 1vh;
    padding: 1vh 0;
    box-shadow: 5px 3px 4px ${({theme}) => theme.secondaryDark};
    border-radius: 4px;
`

export const StyledCommitListContainer = styled.div`

`