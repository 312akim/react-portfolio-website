import React, { useState, useEffect } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainer, StyledTextSection, StyledAnimationContainer, StyledDial, StyledSelector, StyledActiveAnimation } from './LandingComponentStyles';
import compassNav from '../../../shared/images/compass-nav.svg'
//import clockHand from '../../../shared/images/clock-hand1.svg'

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
                    <StyledSelector src={compassNav}/>
                    <StyledActiveAnimation>
                        <StyledDial src={compassNav} />
                    </StyledActiveAnimation>
                </StyledAnimationContainer>
            </>
        )
    }
    

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <LandingHero />
            <LandingAnimation />
            <LandingText />
        </StyledSectionComponent>
    );
}