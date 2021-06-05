import React from 'react';
import { Link } from 'react-scroll';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledHomeNavContainer, StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainer, StyledTextSection, StyledHomeLinkButton, StyledHomeFlexContainer, StyledHomeFlexPairContainer, StyledHomeContentContainer, StyledHomeLinkContainer, StyledHomeLinkIconTextContainer, StyledHomeNavWrapper, StyledHomeComponentContainer } from './HomeComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUserAstronaut, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const HomeComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight} height={'auto'}>
            <StyledHomeComponentContainer>
                <HomeHero />
                <StyledHomeContentContainer>
                    <HomeText />
                    <HomeNav />
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

const HomeNav = () => {
    return (
        <StyledHomeNavWrapper>
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
                    <StyledHomeLinkButton>
                        <a href="https://www.linkedin.com/in/alexander-kim-7441a416a/" target="_blank">LinkedIn</a>
                    </StyledHomeLinkButton>
                </StyledHomeFlexPairContainer>
            </StyledHomeNavContainer>
        </StyledHomeNavWrapper>
    )
}

export const ReactScrollHomeLink = ({id, title, faIcon, delay = 0}) => {
    return (
        <StyledHomeLinkContainer>
            <a>
                <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                    <StyledHomeLinkIconTextContainer>
                        <FontAwesomeIcon icon={faIcon} size="2x" />
                        <div>
                            {title}
                        </div>
                    </StyledHomeLinkIconTextContainer>
                </Link>
            </a>
        </StyledHomeLinkContainer>
    )
}