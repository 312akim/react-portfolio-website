import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { NameContainer, MainHeader, SubHeader, TextContainer, TextSection, FlyingAnimationContainer } from './LandingComponentStyles';

export const LandingComponent = () => {

    const LandingText = () => {
        return (
            <TextContainer>
                <TextSection>
                    Welcome to my portfolio.
                </TextSection>
                <TextSection>
                    I'm a front end web developer with a background in business.
                </TextSection>
                <TextSection>
                    I love thinking about all aspects of a company with a particular interest in user experience.
                </TextSection>
            </TextContainer>
        )
    }

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
            <FlyingAnimationContainer />
            <LandingText />
        </StyledSectionComponent>
    );
}