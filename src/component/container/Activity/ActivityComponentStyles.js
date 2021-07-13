import styled from 'styled-components';
import { flexColumnCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';

//Animations

//Styles
export const StyledActivitySectionContainer = styled.div`
    width: 100vw;
    padding-bottom: 4vh;
`

export const StyledCommitListContainer = styled.div`
    
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

export const StyledCommitTitleAnchor = styled.a`
    text-decoration: none;
    color: white;
`

export const StyledCommitTitle = styled.div`
    align-self: center;
    padding: 0 10px 3px 10px;
    color: ${({theme}) => theme.primaryLight};
    font-size: 1.4rem;
    font-weight: bold;
    background: black;
    width: auto;
    box-shadow: 3px 2px 2px ${({theme}) => theme.secondaryLight};
    border-radius: 4px;

    @media (min-width: 768px) {
        align-self: start;
        margin: 0 2%;
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
    text-decoration: underline;

    :hover {
        color: ${({theme}) => theme.secondaryLight};
    }
`

export const StyledCommitDataContainer = styled.div`
    border: 1px ${({theme}) => theme.secondaryLight} solid;
    margin: 1vh 2%;
    padding: 1vh 0;
    box-shadow: 5px 3px 4px ${({theme}) => theme.secondaryDark};
    border-radius: 4px;
`