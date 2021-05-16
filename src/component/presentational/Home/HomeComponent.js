import React, { useState } from 'react';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledAnimationContainer, StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainer, StyledTextSection, StyledDialButtonContainer, StyledDialButton, StyledHomeAnimNav } from './HomeComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent';


export const HomeComponent = () => {
    const [active, setActive] = useState(false);


    const mouseEnterHandler = () => {
        console.log('onMouseEnter')
    }

    const mouseLeaveHandler = () => {
        console.log('onMouseLeave')
    }

    const mouseMoveHandler = () => {
        console.log(
            'onMouseMove'
        )
    }

    const HomeHero = () => {
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

    const HomeText = () => {
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

    const HomeAnimation = () => {
        return (
            <StyledAnimationContainer>
                <StyledHomeAnimNav
                    onMouseEnter={mouseEnterHandler()} 
                    onMouseLeave={mouseLeaveHandler()}
                    onMouseMove={mouseMoveHandler()}
                >

                </StyledHomeAnimNav>
            </StyledAnimationContainer>
        )
    }

    const AnimationButtons = () => {
        return (
            <StyledDialButtonContainer>
                <StyledDialButton onClick={() => {
                    //Set off animation.
                    setActive(!active);
                    //Set back to false.
                    setActive(!active);
                }}>
                    <ReactScrollLink title="Home" id="homeSection" delay={2500}/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="Projects" id="projectsSection"/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="About" id="aboutSection"/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="Activity" id="activitySection"/>
                </StyledDialButton>
                <StyledDialButton>
                    <ReactScrollLink title="Contact" id="contactSection"/>
                </StyledDialButton>
            </StyledDialButtonContainer>
        )
    }
    
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight} height={'106vh'}>
            <HomeHero />
            <HomeAnimation />
            <AnimationButtons />
            <HomeText />
        </StyledSectionComponent>
    );
}