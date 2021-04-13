import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainer, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHero } from './ProjectsComponentStyles';
import projectPlaceholder from '../../../shared/images/project-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

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

    // Which projects page to display
    const ProjectSection = () => {
        if (section) {
            return (
                <StyledProjectCardsContainer>
                    <StyledProjectCard>
                        <StyledProjectCardImage src={projectPlaceholder}/>
                        <StyledCardHoverContainer>
                            <StyledProjectCardTitle>
                                Apparel Store
                            </StyledProjectCardTitle>
                            <StyledProjectInformation>
                                Responsive SPA e-commerce apparel web store meant to act as a template for smaller shops. Cart and checkout functionality achieved through integration with Snipcart.
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
                        <StyledProjectCardImage src={projectPlaceholder}/>
                        <StyledCardHoverContainer>
                            <StyledProjectCardTitle>
                                Animation/UX Concepts
                            </StyledProjectCardTitle>
                            <StyledProjectInformation>
                                A playground showcase website displaying various animations and user experience concepts i've attempted. Constantly a work in progress.
                            </StyledProjectInformation>
                            <StyledReadMore onClick={() => projectModalSwitcher(2)}>
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
                </StyledProjectCardsContainer>
            )
        } else {
            if (!section) {
                return (
                    <StyledAltProjectCardsContainer>
                        <StyledProjectCard>
                            <StyledProjectCardImage src={projectPlaceholder}/>
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
                            <StyledProjectCardImage src={projectPlaceholder}/>
                            <StyledCardHoverContainer>
                                <StyledProjectCardTitle>
                                    FitBrews React Website
                                </StyledProjectCardTitle>
                                <StyledProjectInformation>
                                    A healthy drink recipe created under Nucamp's Bootcamp. I partnered with a classmate to code and design through weekly meetings. Array methods were heavily utilized.
                                </StyledProjectInformation>
                                <StyledReadMore onClick={() => projectModalSwitcher(4)}>
                                    Read More
                                </StyledReadMore>
                                <StyledGithubLink 
                                    href="https://github.com/stevenCsaunders/fit-brews-react"
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
    const SectionSwitcher = () => {
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
    const ModalDisplay = () => {
        switch(showModal) {
            case 0:
                return (
                    <div></div>
                )
            case 1:
                return (
                    <StyledModalContainer onClick={() => projectModalSwitcher(0)}>
                        <StyledModalHero>
                            Test 1111
                        </StyledModalHero>
                    </StyledModalContainer>
                )
            case 2:
                return (
                    <StyledModalContainer onClick={() => projectModalSwitcher(0)}>
                        <StyledModalHero>
                            Test 2222
                        </StyledModalHero>
                    </StyledModalContainer>
                )
            case 3:
                return (
                    <StyledModalContainer onClick={() => projectModalSwitcher(0)}>
                        <StyledModalHero>
                            Test 3333
                        </StyledModalHero>
                    </StyledModalContainer>
                )
            case 4:
                return (
                    <StyledModalContainer onClick={() => projectModalSwitcher(0)}>
                        <StyledModalHero>
                            Test 4444
                        </StyledModalHero>
                    </StyledModalContainer>
                )
        }
    }

    // Body
    const SectionContainer = () => {
        return (
            <>
                <SectionSwitcher />
                <StyledSectionContainer>
                    {ModalDisplay()}
                    <StyledSectionHeader>
                        Projects
                    </StyledSectionHeader>
                    <ProjectSection />
                </StyledSectionContainer>
            </>
        )
    }

    // Main
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryDark}>
            <SectionContainer />
        </StyledSectionComponent>
    )
}