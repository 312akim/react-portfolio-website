import styled from 'styled-components';

export const StyledContactForm = styled.div`
    height: 70vh;   
    width: 80%;
    margin: 4vh auto;
    box-shadow: 0 0 42px ${({theme}) => theme.primaryDark};
    padding: 0 10%;
    background: ${({theme}) => theme.secondaryDark};
    color: ${({theme}) => theme.primaryLight};

    @media (min-width: 480px) {
        width: 60%;
        padding: 0 10%;
    }

    @media (min-width: 1200px) {
        width: 30%;
        padding: 0 10%;
    }

    @media (min-width: 1200px) {
        width: 45%;
        padding: 0 10%;
    }
`

export const StyledContactHeaderText = styled.div`
    
`

export const StyledContactLabel = styled.label`
    display: block;
    text-align: left;
    margin: 0 auto 1vh auto;
`

export const StyledRequiredAsterick = styled.span`
    color: red;
`

export const StyledContactInput = styled.input`
    display: block;
    width: 100%;
    height: 3vh;
    border: 3px solid${({theme}) => theme.secondaryLight};
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
    width: 100%;
    height: 3vh;
    margin: 2vh auto 0 auto;
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
`

export const StyledContactFNameContainer = styled.div`
    display: inline-block;
    width: 45%;
    left: 0;
    padding-right: 5%;
    padding-top: 2vh;
    margin: 2vh auto 0 auto;
`

export const StyledContactLNameContainer = styled.div`
    display: inline-block;
    width: 45%;
    right: 0;
    padding-left: 5%;
    padding-top: 2vh;
    margin: 2vh auto 0 auto;
`