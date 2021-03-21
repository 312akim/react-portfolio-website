import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledContactHeaderText, StyledContactInput, StyledContactInputContainer, StyledContactLabel, StyledContactTextarea } from './ContactComponentStyles';

export const ContactComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <StyledSectionHeader>
                Contact Me
            </StyledSectionHeader>
            <StyledContactHeaderText>
                I hope to hear from you soon!
            </StyledContactHeaderText>
            <form>
                <StyledContactInputContainer>
                    <StyledContactLabel>
                        Name:
                        <StyledContactInput type="text" name="name" />
                    </StyledContactLabel>
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel>
                        Email
                        <StyledContactInput type="text" name="email" />
                    </StyledContactLabel>
                </StyledContactInputContainer>
                <StyledContactInputContainer>
                    <StyledContactLabel>
                        Message:
                        <StyledContactTextarea type="text" name="message" />
                    </StyledContactLabel>
                    <StyledContactInput type="submit" value="Submit" />
                </StyledContactInputContainer>
            </form>
        </StyledSectionComponent>
    )
}