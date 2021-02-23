import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainer, StyledSectionHeader, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer } from './ProjectsComponentStyles';
import projectPlaceholder from '../../../shared/images/project-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export const ProjectsContainer = () => {

    //Used to change visual of Section Switcher depending on state
    const [section, setSection]  = useState(true);

    const sectionSwitchHandler = (e) => {
        setSection(!section);
        console.log("Section changed to: " + section)
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
                                Responsive SPA e-commerce apparel web store meant to act as a template for smaller shops. Planned future integration with shopify lite to enable live sales.
                            </StyledProjectInformation>
                            <StyledReadMore>
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
                                A playground website displaying various animations and user experience concepts.
                            </StyledProjectInformation>
                            <StyledReadMore>
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
                            <StyledProjectCardImage src={projectPlaceholder}/>
                            <StyledCardHoverContainer>
                                <StyledProjectCardTitle>
                                    Portfolio Website
                                </StyledProjectCardTitle>
                                <StyledProjectInformation>
                                    Overview of this website, my personal portfolio website.
                                </StyledProjectInformation>
                                <StyledReadMore>
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
                                    Placeholder Title
                                </StyledProjectCardTitle>
                                <StyledProjectInformation>
                                    Apparel store uses technologies such as etc etc.
                                </StyledProjectInformation>
                                <StyledReadMore>
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
                    </StyledAltProjectCardsContainer>
                )
            }
        }
    }

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

    const SectionContainer = () => {
        return (
            <StyledSectionContainer>
                <SectionSwitcher />
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
                <ProjectSection />
            </StyledSectionContainer>
        )
    }

    const ProjectModal = () => {
        return (
            <StyledModalContainer>

            </StyledModalContainer>
        )
    }

    // Main
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryDark}>
            <SectionContainer />
        </StyledSectionComponent>
    )
}