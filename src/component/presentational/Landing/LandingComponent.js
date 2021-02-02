import React, { useState, useEffect } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainer, StyledTextSection, StyledAnimationContainer, StyledAnimationPointer, StyledDial } from './LandingComponentStyles';
import halfDial from '../../../shared/images/half-dial.svg'

export const LandingComponent = () => {

    const [color, setColor] = useState('red');

    const LandingHero = () => {
        return (
            <StyledNameContainer>
                <StyledMainHeader>
                    Alex Kim
                </StyledMainHeader>
                <StyledSubHeader>
                    Web Developer
                </StyledSubHeader>
            </StyledNameContainer>
        )
    }

    const LandingText = () => {
        return (
            <StyledTextContainer>
                <StyledTextSection>
                    Welcome to my portfolio.
                </StyledTextSection>
                <StyledTextSection>
                    I'm a front end web developer with a background in business.
                </StyledTextSection>
                <StyledTextSection>
                    I love thinking about all aspects of a company with a particular interest in animation.
                </StyledTextSection>
            </StyledTextContainer>
        )
    }

    const LandingAnimation = () => {
        return (
            <StyledAnimationContainer>
                <StyledAnimationPointer onMouseEnter={() => animationFunction()} backgroundColor={color} />
                <StyledDial src={halfDial} />
            </StyledAnimationContainer>
        )
    }
    

    const animationFunction = () => {
        setColor('black');
    }

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <LandingHero />
            <LandingAnimation />
            <LandingText />
        </StyledSectionComponent>
    );
}