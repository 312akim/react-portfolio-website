import styled from 'styled-components';

//Animations

//Styles
export const StyledActivitySectionContainer = styled.div`
    width: 100vw;
`

export const StyledCommitListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6vh;
`

export const StyledCommitWrapper = styled.div`
    width: 343px;
    padding-bottom: 3vh;
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
    width: 256px;
    box-shadow: 3px 2px 2px ${({theme}) => theme.secondaryLight};
    border-radius: 4px;

    @media (min-width: 480px) {
        font-size: 1.4rem;
        box-shadow: 5px 4px 4px ${({theme}) => theme.secondaryLight};
    }
`

export const StyledCommitDataWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    @media (min-width: 480px) {
        padding-top: 1vh;
    }
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
    margin-bottom: 1vh;
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