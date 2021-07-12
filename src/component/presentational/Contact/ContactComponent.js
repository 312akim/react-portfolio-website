import React from 'react';
import { StyledDefaultButton, StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledContactSubmitButton, StyledContactInputContainer, StyledContactLabel, StyledContactTextarea, StyledContactFNameContainer, StyledContactLNameContainer, StyledRequiredAsterick, StyledNameInputContainers, StyledFormikWrapper } from './ContactComponentStyles';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ContactComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight}>
            <StyledSectionHeader>
                Contact Me
            </StyledSectionHeader>
            <StyledSectionSubheader>
                I hope to hear from you soon!
            </StyledSectionSubheader>
            <ContactForm />
        </StyledSectionComponent>
    )
}

const ContactForm = () => {

    //EmailJs
    const sendEmail = (object) => {
        emailjs.send("service_e968q22", "template_4k3a6so", object, "user_751xNiHC7Q8RBo3dQib5W")
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    const onSubmit = (values, actions) => {
        setTimeout(() => {
            sendEmail(values)
            actions.setSubmitting(false)
          }, 1000)
        
        actions.resetForm();
    };

    return (
        <StyledFormikWrapper>
            <Formik
                initialValues={{ formSubject: '', formEmail: '', formFName: '', formLName: '', formMessage: '' }}
                onSubmit={onSubmit}

                validate={values => {
                    const errors = {};
                    if (!values.formSubject) {
                        errors.formSubject = 'Required';
                    }

                    if (!values.formEmail) {
                        errors.formEmail = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.formEmail)
                    ) {
                        errors.formEmail = 'Invalid email address';
                    }

                    if (!values.formFName) {
                        errors.formFName = 'Required';
                    }

                    if (!values.formMessage) {
                        errors.formMessage = 'Required';
                    }
                    
                    return errors;
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form className='formikForm'>
                        <StyledContactInputContainer>
                            <StyledContactLabel for='formSubject'>
                                Subject:
                                <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                            </StyledContactLabel>
                            <Field id='formSubject' type='text' name='formSubject' placeholder='Subject' className='contactInputField'/>
                            <ErrorMessage className='contactErrorMessage' name='formSubject' component='div' />
                        </StyledContactInputContainer>
                        <StyledContactInputContainer>
                            <StyledContactLabel for='formEmail'>
                                Email:
                                <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                            </StyledContactLabel>
                            <Field id='formEmail' type='email' name='formEmail' placeholder='Email' className='contactInputField'/>
                            <ErrorMessage className='contactErrorMessage' name='formEmail' component='div' />
                        </StyledContactInputContainer>
                        <StyledContactInputContainer>
                            <StyledContactLabel for='formFName'>
                                First Name:
                                <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                            </StyledContactLabel>
                                <Field id='formFName' type='text' name='formFName' placeholder='First Name' className='contactInputField'/>
                                <ErrorMessage className='contactErrorMessage' name='formFName' component='div' />
                        </StyledContactInputContainer>
                        <StyledContactInputContainer>
                            <StyledContactLabel for='formLName'>
                                Last Name:
                            </StyledContactLabel>
                                <Field id='formLName' type='text' name='formLName' placeholder='Last Name' className='contactInputField'/>
                                <ErrorMessage className='contactErrorMessage' name='formLName' component='div' />
                        </StyledContactInputContainer>
                        <StyledContactInputContainer>
                            <StyledContactLabel for='formMessage'>
                                Message:
                                <StyledRequiredAsterick>&nbsp;*</StyledRequiredAsterick>
                            </StyledContactLabel>
                                <Field id='formMessage' component='textarea' name='formMessage' placeholder='Message' className='contactInputField contactTextAreaField'/>
                                <ErrorMessage className='contactErrorMessage' name='formMessage' component='div' />
                        </StyledContactInputContainer>

                        <StyledDefaultButton margin='4vh auto' type='submit' disabled={isSubmitting}>
                            Submit
                        </StyledDefaultButton>
                    </Form>
                )}
            </Formik>
        </StyledFormikWrapper>
    )
}