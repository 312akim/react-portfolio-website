import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContentContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainer, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHero, StyledModalText, StyledModalWrapper } from './ProjectsComponentStyles';
import { StyledImageCropContainer } from '../../../shared/sharedComponents/ImageStyledComponents';
import projectPlaceholder from '../../../shared/images/apparel-store-mockup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export const ProjectsComponent = () => {

    //Used to change visual of Section Switcher depending on state
    const [section, setSection]  = useState(true);

    //State to represent which project modal to show.
    const [showModal, setShowModal] = useState(0);

    const sectionSwitchHandler = (e) => {
        setSection(!section);
        console.log("Section changed to: " + section)
    }

    const projectModalSwitcher = (state) => {
        setShowModal(state);
    }

    // Main
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryDark} fontColor={({theme}) => theme.primaryLight}>
            <SectionContainer section={section} projectModalSwitcher={projectModalSwitcher} sectionSwitchHandler={sectionSwitchHandler} showModal={showModal}/>
        </StyledSectionComponent>
    )
}

// Which projects page to display
const ProjectSection = ({section, projectModalSwitcher}) => {
    if (section) {
        return (
            <StyledProjectCardsContainer>
                
                <StyledProjectCard>
                    <StyledImageCropContainer height={'37vh'}>
                        <StyledProjectCardImage src={projectPlaceholder}/>
                    </StyledImageCropContainer>
                    <StyledCardHoverContainer>
                        <StyledProjectCardTitle>
                            Tokenize Amazon
                        </StyledProjectCardTitle>
                        <StyledProjectInformation>
                            Responsive Landing Page and Full website of Tokenize Amazon website.
                        </StyledProjectInformation>
                        <StyledReadMore onClick={() => projectModalSwitcher(1)}>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink 
                            href="https://github.com/312akim/apparel-store-mern"
                            target="_blank"
                        >
                            Github
                        </StyledGithubLink>
                    </StyledCardHoverContainer>
                </StyledProjectCard>

                <StyledProjectCard>
                    <StyledImageCropContainer height={'37vh'}>
                        <StyledProjectCardImage src={projectPlaceholder}/>
                    </StyledImageCropContainer>
                    <StyledCardHoverContainer>
                        <StyledProjectCardTitle>
                            Apparel Store
                        </StyledProjectCardTitle>
                        <StyledProjectInformation>
                            Responsive SPA e-commerce apparel web store template for smaller shops. Cart and checkout functionality achieved through integration with Snipcart.
                        </StyledProjectInformation>
                        <StyledReadMore onClick={() => projectModalSwitcher(2)}>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink 
                            href="https://github.com/312akim/apparel-store-mern"
                            target="_blank"
                        >
                            Github
                        </StyledGithubLink>
                    </StyledCardHoverContainer>
                </StyledProjectCard>

            </StyledProjectCardsContainer>
        )
    } else {
        if (!section) {
            return (
                <StyledAltProjectCardsContainer>

                    <StyledProjectCard>
                        <StyledImageCropContainer height={'37vh'}>
                            <StyledProjectCardImage src={projectPlaceholder}/>
                        </StyledImageCropContainer>
                        <StyledCardHoverContainer>
                            <StyledProjectCardTitle>
                                Portfolio Website
                            </StyledProjectCardTitle>
                            <StyledProjectInformation>
                                Overview of this website, my personal portfolio website.
                            </StyledProjectInformation>
                            <StyledReadMore onClick={() => projectModalSwitcher(3)}>
                                Read More
                            </StyledReadMore>
                            <StyledGithubLink 
                                href="https://github.com/312akim/react-portfolio-website"
                                target="_blank"
                            >
                                Github
                            </StyledGithubLink>
                        </StyledCardHoverContainer>
                    </StyledProjectCard>

                    <StyledProjectCard>
                    <StyledImageCropContainer height={'37vh'}>
                        <StyledProjectCardImage src={projectPlaceholder}/>
                    </StyledImageCropContainer>
                    <StyledCardHoverContainer>
                        <StyledProjectCardTitle>
                            UX Site Concepts
                        </StyledProjectCardTitle>
                        <StyledProjectInformation>
                            A playground showcase website displaying various animations and user experience concepts i've attempted. Constantly a work in progress.
                        </StyledProjectInformation>
                        <StyledReadMore onClick={() => projectModalSwitcher(4)}>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink 
                            href="https://github.com/312akim/"
                            target="_blank"
                        >
                            Github
                        </StyledGithubLink>
                    </StyledCardHoverContainer>
                </StyledProjectCard>

                </StyledAltProjectCardsContainer>
            )
        }
    }
}

// Project Section Display Switcher & arrow icon
const SectionSwitcher = ({section, sectionSwitchHandler}) => {
    if (section) {
        return (
            <StyledSectionSwitcher position={'0%'} onClick={() => sectionSwitchHandler()}>
                <StyledSectionIconContainer>
                    <FontAwesomeIcon icon={faAngleRight} size="4x" />
                </StyledSectionIconContainer>
            </StyledSectionSwitcher>
        )
    } else {
        return (
            <StyledSectionSwitcher position={'85%'} onClick={() => sectionSwitchHandler()}>
                <StyledSectionIconContainer>
                    <FontAwesomeIcon icon={faAngleLeft} size="4x" />
                </StyledSectionIconContainer>
            </StyledSectionSwitcher>
        )
    }
}

// Modal Display
const ModalDisplay = ({showModal, projectModalSwitcher}) => {
    switch(showModal) {
        case 0:
            return (
                <div></div>
            )
        case 1:
            return (
                <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                    <StyledModalContentContainer>
                        <StyledModalHero>
                            Test 1111
                        </StyledModalHero>
                        <StyledModalText>
                            <div>
                                Freelance Project consisting of a Landing Page &amp; Full website.
                            </div>
                            <hr/>
                            <div>Landing Page Key Learnings:</div>
                            <ul>
                                <li>Working with UI/UX Designer</li>
                                <li>Email Newsletter integration via MailChimp &amp; form submission</li>
                                <li>Youtube video embed &amp; video scaling</li>
                                <li>PDF File opening in new tab</li>
                            </ul>
                        </StyledModalText>
                    </StyledModalContentContainer>
                </StyledModalWrapper>
            )
        case 2:
            return (
                <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                    <StyledModalContentContainer>
                        <StyledModalHero>
                            Test 2222
                        </StyledModalHero>
                        <StyledModalText>
                            
                        </StyledModalText>
                    </StyledModalContentContainer>
                </StyledModalWrapper>
            )
        case 3:
            return (
                <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                    <StyledModalContentContainer>
                        <StyledModalHero>
                            Test 3333
                        </StyledModalHero>
                        <StyledModalText>
                            
                        </StyledModalText>
                    </StyledModalContentContainer>
                </StyledModalWrapper>
            )
        case 4:
            return (
                <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                    <StyledModalContentContainer>
                        <StyledModalHero>
                            Test 4444
                        </StyledModalHero>
                        <StyledModalText>
                            
                        </StyledModalText>
                    </StyledModalContentContainer>
                </StyledModalWrapper>
            )
    }
}

// Body
const SectionContainer = ({section, projectModalSwitcher, showModal, sectionSwitchHandler}) => {
    return (
        <>
            <SectionSwitcher section={section} sectionSwitchHandler={sectionSwitchHandler}/>
            <StyledSectionContainer>
                <ModalDisplay showModal={showModal} projectModalSwitcher={projectModalSwitcher}/>
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
                <ProjectSection section={section} projectModalSwitcher={projectModalSwitcher} />
            </StyledSectionContainer>
        </>
    )
}