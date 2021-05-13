import COLORS from '../../../shared/design/colorTheme';
import styled, {keyframes} from 'styled-components';

export const StyledContactForm = styled.div`
    width: 70%;
    margin: auto;
    border: 1px solid black;
    padding: 10%;

    @media (min-width: 1200px) {
        width: 60%;
        padding: 5%;
    }
`

export const StyledContactHeaderText = styled.div`
    
`

export const StyledContactLabel = styled.label`
    display: block;
    text-align: left;
`

export const StyledContactInput = styled.input`
    display: block;
    width: 100%;
`


export const StyledContactTextarea = styled.textarea`
    display: block;
    width: 100%;
`

export const StyledContactSubmitButton = styled.button`
    display: block;
    margin: auto;
`

export const StyledContactInputContainer = styled.div`
    display: 'inline-block';
    margin: auto;
    border: 1px solid red;
`