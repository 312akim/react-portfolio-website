import styled from 'styled-components';

export const StyledFormikWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;   
    width: 343px;
    margin: 9vh auto;
    box-shadow: 0 0 42px ${({theme}) => theme.primaryDark};
    padding: 0 10%;
    background: ${({theme}) => theme.secondaryDark};
    color: ${({theme}) => theme.primaryLight};
    border-radius: 4px;
`

export const StyledContactLabel = styled.label`
    display: block;
    text-align: left;
    margin: 0 auto 1vh 10%;

    @media (min-width: 768px) {
        margin: 0 auto 1vh 5%;
    }


`

export const StyledRequiredAsterick = styled.span`
    color: ${({theme}) => theme.secondaryAlert};
`

export const StyledContactTextarea = styled.textarea`
    display: block;
    width: 100%;
    height: 6vh;
    margin: 0 auto 3% auto;
    box-sizing: border-box;
    border: 3px solid${({theme}) => theme.secondaryLight};
`

export const StyledContactSubmitButton = styled.button`
    display: block;
    margin: auto;
    width: 60%;
    height: 4vh;
    margin: 5vh auto;
    background:${({theme}) => theme.secondaryLight};
    color: ${({theme}) => theme.primaryLight};
    border: 3px solid ${({theme}) => theme.primaryLight};

    :hover {
        background: ${({theme}) => theme.primaryLight};
        color:${({theme}) => theme.secondaryLight};
        border: 3px solid${({theme}) => theme.secondaryLight};
    }
`

export const StyledContactInputContainer = styled.div`
    display: block;
    padding-top: 2vh;
    margin: 2vh auto 0 auto;
    width: 100%;
`

export const StyledNameInputContainers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2vh;
    margin-top: 2vh;
`

export const StyledContactFNameContainer = styled.div`
    display: inline-block;
    width: 45%;
`

export const StyledContactLNameContainer = styled.div`
    display: inline-block;
    width: 45%;
`