import React from 'react';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { ReactScrollHomeLink } from '../../../shared/sharedComponents/ReactScrollComponent';
import { StyledHomeNavContainer, StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainerWrapper, StyledTextContainer, StyledTextSection, StyledHomeLinkButton, StyledHomeFlexContainer, StyledHomeFlexPairContainer, StyledHomeContentContainer, StyledHomeNavWrapper, StyledHomeComponentContainer, StyledLinkedinAnchorContainer } from './HomeComponentStyles';
import { faLaptopCode, faUserAstronaut, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from 'react-intersection-observer'

export const HomeComponent = () => {
    // Intersect Observer *****
    const [homeAnimatedRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.75,
    })
    // ************************
    
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight} height={'auto'}>
            <StyledHomeComponentContainer>
                <HomeHero />
                <StyledHomeContentContainer ref={homeAnimatedRef}>
                    <HomeText inView={inView}/>
                    <HomeNav inView={inView}/>
                </StyledHomeContentContainer>
            </StyledHomeComponentContainer>
        </StyledSectionComponent>
    );
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

interface DisplayContent {
    inView: boolean
}

const HomeText = ({inView}: DisplayContent) => {
    return (
        <StyledTextContainerWrapper inView={inView}>
            <StyledTextContainer>
                <StyledTextSection>
                    Welcome to my portfolio.
                </StyledTextSection>
                <StyledTextSection>
                    I'm a front end web developer with a background in business.
                </StyledTextSection>
                <StyledTextSection>
                    I love thinking about all aspects of a business with a particular interest in user experience.
                </StyledTextSection>
            </StyledTextContainer>
        </StyledTextContainerWrapper>
    )
}

const HomeNav = ({inView}: DisplayContent) => {
    return (
        <StyledHomeNavWrapper inView={inView}>
            <StyledHomeNavContainer>
                <StyledHomeFlexContainer>
                    <StyledHomeLinkButton>
                        <ReactScrollHomeLink title="Projects" id="projectsSection" faIcon={faLaptopCode}></ReactScrollHomeLink>
                    </StyledHomeLinkButton>
                </StyledHomeFlexContainer>

                <StyledHomeFlexPairContainer justifyContent={'flex-start'} margin={'0 30px 0 0'}>
                    <StyledHomeLinkButton>
                        <ReactScrollHomeLink title="About" id="aboutSection" faIcon={faUserAstronaut}/>
                    </StyledHomeLinkButton>
                    <StyledHomeLinkButton>
                        <ReactScrollHomeLink title="Activity" id="activitySection" faIcon={faCodeBranch}/>
                    </StyledHomeLinkButton>
                </StyledHomeFlexPairContainer>

                <StyledHomeFlexPairContainer justifyContent={'flex-end'} margin={'0 0 0 30px'}>
                    <StyledHomeLinkButton>
                        <ReactScrollHomeLink title="Contact" id="contactSection" faIcon={faEnvelope}/>
                    </StyledHomeLinkButton>
                    <StyledLinkedinAnchorContainer href="https://www.linkedin.com/in/alexander-kim-7441a416a/" target="_blank">
                        <StyledHomeLinkButton>
                                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                                <div>LinkedIn</div>
                        </StyledHomeLinkButton>
                    </StyledLinkedinAnchorContainer>
                </StyledHomeFlexPairContainer>

                <StyledHomeFlexContainer margin={'0 20px 0 0'}>
                    <StyledLinkedinAnchorContainer href="https://github.com/312akim" target="_blank">
                        <StyledHomeLinkButton>
                            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                            <div>Github</div>
                        </StyledHomeLinkButton>
                    </StyledLinkedinAnchorContainer>
                </StyledHomeFlexContainer>
                
            </StyledHomeNavContainer>
        </StyledHomeNavWrapper>
    )
}