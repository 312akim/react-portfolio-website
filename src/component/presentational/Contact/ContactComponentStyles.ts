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

export const StyledContactInputContainer = styled.div`
    display: block;
    padding-top: 2vh;
    margin: 2vh auto 0 auto;
    width: 100%;
`