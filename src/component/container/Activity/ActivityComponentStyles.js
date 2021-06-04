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

    @media (min-width: 768px) {
        width: 688px;
    }
`


export const StyledCommitTitle = styled.h2`
    position: absolute;
    text-align: left;
    margin-left: -1%;
    padding: 0 6px 3px 6px;
    margin-top: -15px;
    color: ${({theme}) => theme.primaryLight};
    font-size: 1.2rem;
    background: black;
    width: auto;
    box-shadow: 3px 2px 2px ${({theme}) => theme.secondaryLight};
    border-radius: 4px;
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
`

export const StyledCommitListContainer = styled.div`

`