import React, { useState, useEffect } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainer, StyledTextSection, StyledAnimationContainer, StyledDial, StyledSelector, StyledActiveAnimation, StyledDialButtonContainer, StyledDialButton } from './LandingComponentStyles';
import compassNav from '../../../shared/images/compass-nav.svg'
import arrow from '../../../shared/images/arrow.svg'

export const LandingComponent = () => {

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
            <>
                <StyledAnimationContainer>
                    <StyledSelector src={arrow}/>
                    <StyledActiveAnimation>
                        <StyledDial src={compassNav} />
                    </StyledActiveAnimation>
                </StyledAnimationContainer>
            </>
        )
    }

    const AnimationButtons = () => {
        return (
            <StyledDialButtonContainer>
            <StyledDialButton>
                Home
            </StyledDialButton>
            <StyledDialButton>
                Projects
            </StyledDialButton>
            <StyledDialButton>
                About
            </StyledDialButton>
            <StyledDialButton>
                Contact
            </StyledDialButton>
        </StyledDialButtonContainer>
        )
    }
    

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <LandingHero />
            <LandingAnimation />
            <AnimationButtons />
            <LandingText />
        </StyledSectionComponent>
    );
}