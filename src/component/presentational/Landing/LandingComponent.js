import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { NameContainer, MainHeader, SubHeader, TextContainer } from './LandingComponentStyles';

export const LandingComponent = () => {

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <NameContainer>
                <MainHeader>
                    Alex Kim
                </MainHeader>
                <SubHeader>
                    Web Developer
                </SubHeader>
            </NameContainer>
            <TextContainer>
                Welcome to my portfolio.

                I'm a front end web developer with a background in business.

                I love thinking about all aspects of a company with a particular interest in user experience.
            </TextContainer>
        </StyledSectionComponent>
    );
}