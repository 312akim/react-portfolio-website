import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledContactHeaderText, StyledContactInput, StyledContactInputContainer, StyledContactLabel, StyledContactTextarea } from './ContactComponentStyles';
import { send } from 'emailjs-com';

export const ContactComponent = () => {

    const [toSend, setToSend] = useState({
        name: '',
        to_name: 'Alex',
        subject: '',
        message: '',
        email: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          `service_e968q22`,
          `template_4k3a6so`,
          toSend,
          `user_751xNiHC7Q8RBo3dQib5W`
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });

        setToSend({
            name: '',
            to_name: 'Alex',
            subject: '',
            message: '',
            email: ''
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
                    <StyledContactLabel>
                        Subject:
                        <StyledContactInput 
                            type="text" 
                            name="subject" 
                            placeholder='Subject'
                            value={toSend.subject}
                            onChange={handleChange}
                            required
                        />
                    </StyledContactLabel>
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel>
                        Name:
                        <StyledContactInput 
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={toSend.name}
                            onChange={handleChange}
                            required
                        />
                    </StyledContactLabel>
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel>
                        Email:
                        <StyledContactInput
                            type='text'
                            name='email'
                            placeholder='Your email'
                            value={toSend.email}
                            onChange={handleChange}
                            required
                        />
                    </StyledContactLabel>
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel>
                        Message:
                        <StyledContactTextarea
                            type='text'
                            name='message'
                            placeholder='Your message'
                            value={toSend.message}
                            onChange={handleChange}
                            required
                        />
                    </StyledContactLabel>
                    <StyledContactInput type="submit" value="Send" />
                </StyledContactInputContainer>
            </form>
        </StyledSectionComponent>
    )
}