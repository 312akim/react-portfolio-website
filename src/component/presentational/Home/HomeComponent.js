import React, {useState, useEffect, useRef} from 'react';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { ReactScrollHomeLink } from '../../../shared/sharedComponents/ReactScrollComponent';
import { StyledHomeNavContainer, StyledNameContainer, StyledMainHeader, StyledSubHeader, StyledTextContainerWrapper, StyledTextContainer, StyledTextSection, StyledHomeLinkButton, StyledHomeFlexContainer, StyledHomeFlexPairContainer, StyledHomeContentContainer, StyledHomeNavWrapper, StyledHomeComponentContainer, StyledLinkedinAnchorContainer } from './HomeComponentStyles';
import { faLaptopCode, faUserAstronaut, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'intersection-observer';


export const HomeComponent = () => {
    // Intersect Observer *****
    const [contentVisible, setContentVisible] = useState(false);
    const homeContentRef = useRef();

    useEffect(() => {
        const onIntersect = (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setContentVisible(true);
              }
            });
        };

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75
        }

        const observer = new IntersectionObserver(onIntersect, options);
        observer.observe(homeContentRef.current);
        //Cleanup
        return () => observer.disconnect();
    }, [])
    // *****

    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight} height={'auto'}>
            <StyledHomeComponentContainer>
                <HomeHero />
                <StyledHomeContentContainer ref={homeContentRef}>
                    <HomeText contentVisible={contentVisible}/>
                    <HomeNav contentVisible={contentVisible}/>
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

const HomeText = ({contentVisible}) => {
    return (
        <StyledTextContainerWrapper contentVisible={contentVisible}>
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

const HomeNav = ({contentVisible}) => {
    return (
        <StyledHomeNavWrapper contentVisible={contentVisible}>
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