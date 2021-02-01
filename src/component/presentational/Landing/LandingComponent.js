import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { NameContainer, MainHeader, SubHeader, TextContainer } from './LandingComponentStyles';

export const LandingComponent = () => {

    const LandingText = () => {
        return (
            <>
                <TextContainer>
                    Welcome to my portfolio.
                </TextContainer>
                <TextContainer>
                    I'm a front end web developer with a background in business.
                </TextContainer>
                <TextContainer>
                    I love thinking about all aspects of a company with a particular interest in user experience.
                </TextContainer>
            </>
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
            <LandingText />
        </StyledSectionComponent>
    );
}