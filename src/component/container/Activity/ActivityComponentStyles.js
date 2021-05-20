import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring'

//Animations

//Styles
export const StyledCommitListWrapper = styled.div`
    height: 86vh;
    padding-top: 6vh;
`

export const StyledCommitWrapper = styled.div`
    width: 100%;
    height: 43vh;
`


export const StyledCommitTitle = styled.h2`
    position: absolute;
    text-align: left;
    margin-left: 2%;
    padding: 0 6px 3px 6px;
    margin-top: -1.5vh;
    color: ${({theme}) => theme.primaryLight};
    font-size: 1.2rem;
    background: black;
    width: auto;
    box-shadow: 3px 2px 2px ${({theme}) => theme.secondaryLight};
    border-radius: 4px;

    @media (min-width: 480px) {
        font-size: 1.4rem;
        box-shadow: 5px 4px 4px ${({theme}) => theme.secondaryLight};
    }

    @media (min-width: 768px) {
        margin-top: 1vh;
        padding-bottom: 0.3vh;
    }

    @media (min-width: 1200px) {
        margin-top: -1vh;
        margin-left: 12%;
        font-size: 1.6rem;
    }
    
`

export const StyledCommitDataWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
`

export const StyledCommitDate = styled.div`
    display: inline-block;
    color: ${({theme}) => theme.primaryLight};
    margin-top: 0.3rem;
    font-size: 1rem;
`

export const StyledCommitComment = styled.div`
    color: ${({theme}) => theme.primaryLight};
    margin: 0.1rem 5%;

    @media (min-width: 1200px) {
        margin: 0.3rem 0%;
    }
`

export const StyledCommitGitAnchor = styled.a`
    color: ${({theme}) => theme.primaryLight};
`

export const StyledCommitDataContainer = styled.div`
    border: 1px ${({theme}) => theme.secondaryLight} solid;
    width: 90%;
    margin-left: 5%;
    margin-top: 2%;
    padding: 1% 0;
    box-shadow: 5px 3px 4px ${({theme}) => theme.secondaryDark};
    border-radius: 4px;

    @media (min-width: 768px) {
        margin-top: 3%;
    }

    @media (min-width: 1200px) {
        margin: 1vh;
        width: 70%;
        margin-left: 15%;
    }
`

export const StyledCommitListContainer = styled.div`

`