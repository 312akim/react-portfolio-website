import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledContactSubmitButton, StyledContactForm, StyledContactHeaderText, StyledContactInput, StyledContactInputContainer, StyledContactLabel, StyledContactTextarea, StyledContactFNameContainer, StyledContactLNameContainer, StyledRequiredAsterick, StyledNameInputContainers } from './ContactComponentStyles';
import { send } from 'emailjs-com';

export const ContactComponent = () => {

    const [toSend, setToSend] = useState({
        formFName: '',
        formLName: '',
        to_name: 'Alex',
        formSubject: '',
        formMessage: '',
        formEmail: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_e968q22',
          'template_4k3a6so',
          toSend,
          'user_751xNiHC7Q8RBo3dQib5W'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });

        setToSend({
            formFName: '',
            formLName: '',
            to_name: 'Alex',
            formSubject: '',
            formMessage: '',
            formEmail: ''
        })
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight}>

            <StyledSectionHeader>
                Contact Me
            </StyledSectionHeader>
            <StyledSectionSubheader>
                I hope to hear from you soon!
            </StyledSectionSubheader>

            <StyledContactForm onSubmit={onSubmit}>
                <StyledContactInputContainer>
                    <StyledContactLabel for='formSubject'>
                        Subject:
                        <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                    </StyledContactLabel>
                    <StyledContactInput
                        id='formSubject' 
                        type='text' 
                        name='formSubject' 
                        placeholder='Subject'
                        value={toSend.formSubject}
                        onChange={handleChange}
                        required
                    />
                </StyledContactInputContainer>
                <StyledNameInputContainers>
                    <StyledContactFNameContainer>
                        <StyledContactLabel for="formFName">
                            First Name:
                            <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                        </StyledContactLabel>
                        <StyledContactInput 
                            id='formFName'
                            type='text'
                            name='formFName'
                            placeholder='First Name'
                            value={toSend.formFName}
                            onChange={handleChange}
                            required
                        />
                    </StyledContactFNameContainer>
                    <StyledContactLNameContainer>
                        <StyledContactLabel for="formLName">
                            Last Name:
                        </StyledContactLabel>
                        <StyledContactInput 
                            id='formLName'
                            type='text'
                            name='formLName'
                            placeholder='Last Name'
                            value={toSend.formLName}
                            onChange={handleChange}
                        />
                    </StyledContactLNameContainer>
                </StyledNameInputContainers>
                <StyledContactInputContainer>
                    <StyledContactLabel for='formEmail'>
                        Email:
                        <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                    </StyledContactLabel>
                    <StyledContactInput
                        id='formEmail'
                        type='text'
                        name='formEmail'
                        placeholder='Your email'
                        value={toSend.formEmail}
                        onChange={handleChange}
                        required
                    />
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel for='formMessage'>
                        Message:
                        <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                    </StyledContactLabel>
                    <StyledContactTextarea
                        id='formMessage'
                        type='text'
                        name='formMessage'
                        placeholder='Your message'
                        value={toSend.formMessage}
                        onChange={handleChange}
                        required
                    />
                    <StyledContactSubmitButton type='submit'>
                        Send
                    </StyledContactSubmitButton>
                </StyledContactInputContainer>
            </StyledContactForm>
        </StyledSectionComponent>
    )
}