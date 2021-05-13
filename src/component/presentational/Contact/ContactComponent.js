import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledContactButton, StyledContactHeaderText, StyledContactInput, StyledContactInputContainer, StyledContactLabel, StyledContactTextarea } from './ContactComponentStyles';
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
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>

            <StyledSectionHeader>
                Contact Me
            </StyledSectionHeader>
            <StyledContactHeaderText>
                I hope to hear from you soon!
            </StyledContactHeaderText>

            <form onSubmit={onSubmit}>
                <StyledContactInputContainer>
                    <StyledContactLabel for='formSubject'>
                        Subject:
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
                <StyledContactInputContainer>
                    <StyledContactLabel for="formFName">
                        First Name:
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
                </StyledContactInputContainer>
                <StyledContactInputContainer>
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
                        required
                    />
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel for='formEmail'>
                        Email:
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
                    <StyledContactButton type='submit'>
                        Send
                    </StyledContactButton>
                </StyledContactInputContainer>
            </form>
        </StyledSectionComponent>
    )
}