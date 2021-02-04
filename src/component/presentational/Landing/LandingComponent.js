import React, { useState, useEffect } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainer, StyledTextSection, StyledAnimationContainer, StyledDial, StyledSelector, StyledActiveAnimation, StyledDialButtonContainer, StyledDialButton } from './LandingComponentStyles';
import compassNav from '../../../shared/images/compass-nav.svg'
import arrow from '../../../shared/images/arrow.svg'
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent';

export const LandingComponent = () => {
    const [active, setActive] = useState(false);

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
                        <StyledDial src={compassNav} active={active}/>
                    </StyledActiveAnimation>
                </StyledAnimationContainer>
            </>
        )
    }

    const AnimationButtons = () => {
        return (
            <StyledDialButtonContainer>
                <StyledDialButton onClick={() => setActive(true)}>
                    <ReactScrollLink title="Home" id="homeSection" delay={2500}/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="Projects" id="projectsSection"/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="About" id="aboutSection"/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="Contact" id="contactSection"/>
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