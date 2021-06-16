import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledModalTabContentContainer, StyledGithubLink, StyledModalContentContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainerContent, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHero, StyledModalContent, StyledModalWrapper, StyledProjectAnimatedContainer, StyledSectionContainerWrapper, StyledModalNavWrapper, StyledModalNavContainer, StyledModalTabNavButton, StyledModalTabContent, StyledModalTabContentTextItem, StyledModalTabContentTitle,StyledModalTabContentText, StyledModalHeroText } from './ProjectsComponentStyles';
import { StyledImageCropContainer } from '../../../shared/sharedComponents/ImageStyledComponents';
import apparelStoreMockup from '../../../shared/images/apparel-store-mockup.jpg'
import tokenizeAmazonMockup from '../../../shared/images/tokenize-amazon-mockup.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useSpring } from 'react-spring'

export const ProjectsComponent = () => {

    //Used to change visual of Section Switcher depending on state
    const [section, setSection]  = useState(true);

    //State to represent which project modal to show.
    const [showModal, setShowModal] = useState(0);

    const sectionSwitchHandler = (e) => {
        setSection(!section);
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
    const projectConfig = [
        {
            title: "Tokenize Amazon",
            description: "Responsive Landing Page and Full website of Tokenize Amazon website.",
            image: tokenizeAmazonMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(1),
        },
        {
            title: "Apparel Store",
            description: "Responsive SPA e-commerce store with front & back-end functionality. Cart and checkout functionality achieved through integration with Snipcart.",
            image: apparelStoreMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(2),
        },
        {
            title: "Portfolio Website",
            description: "The code behind this portfolio site, featuring the Github Octokit api to load my latest updates.",
            image: tokenizeAmazonMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(3),
        },
        {
            title: "Bubble Tea App",
            description: "In-Progress. My first React-Native project.",
            image: tokenizeAmazonMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(4),
        }
    ];

    if (section) {
        return (
            <StyledProjectCardsContainer>
                {
                   projectConfig.slice(0, 2).map((project) => {
                        return (
                            <StyledProjectCard>
                                <StyledImageCropContainer height={'40vh'}>
                                    <StyledProjectCardImage src={project.image} alt={project.image.alt}/>
                                </StyledImageCropContainer>
                                <StyledCardHoverContainer>
                                    <StyledProjectCardTitle>
                                        {project.title}
                                    </StyledProjectCardTitle>
                                    <StyledProjectInformation>
                                        {project.description}
                                    </StyledProjectInformation>
                                    <StyledReadMore onClick={project.onClick}>
                                        Read More
                                    </StyledReadMore>
                                    <StyledGithubLink 
                                        href={project.gitLink}
                                        target="_blank"
                                    >
                                        Github
                                    </StyledGithubLink>
                                </StyledCardHoverContainer>
                            </StyledProjectCard>
                        )
                    })
                }
            </StyledProjectCardsContainer>
        )
    } else {
        if (!section) {
            return (
                <StyledAltProjectCardsContainer>
                    {
                        projectConfig.slice(2, 4).map((project) => {
                            return (
                                <StyledProjectCard>
                                    <StyledImageCropContainer height={'40vh'}>
                                        <StyledProjectCardImage src={project.image} alt={project.image.alt}/>
                                    </StyledImageCropContainer>
                                    <StyledCardHoverContainer>
                                        <StyledProjectCardTitle>
                                            {project.title}
                                        </StyledProjectCardTitle>
                                        <StyledProjectInformation>
                                            {project.description}
                                        </StyledProjectInformation>
                                        <StyledReadMore onClick={project.onClick}>
                                            Read More
                                        </StyledReadMore>
                                        <StyledGithubLink 
                                            href={project.gitLink}
                                            target="_blank"
                                        >
                                            Github
                                        </StyledGithubLink>
                                    </StyledCardHoverContainer>
                                </StyledProjectCard>
                            )
                        })
                    }
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
    const modal1 = {
        modalTitle: "Tokenize Amazon",
        modalText: "Freelance Project consisting of a Landing Page with the goal of introducing a startup's ideas and email newsletter signups.",
        modalTechText: ["lT1awdawdawd", "lT2", "lT3", "lT1", "lT2", "lT3","lT1", "lT2", "lT3","lT1", "lT2", "lT3","lT1", "lT2", "lT3"],
        modalLearningsText: ["lL1", "lL2", "lL3"],
        modalSummaryText: ["lS1", "lS2", "lS3"],
    }

    const modal2 = {
        modalTitle: "222",
        modalText: "Freelance Project consisting of a Landing Page with the goal of introducing a startup's ideas and email newsletter signups.",
        modalTechText: ["lT1", "lT2", "lT3"],
        modalLearningsText: ["lL1", "lL2", "lL3"],
        modalSummaryText: ["lS1", "lS2", "lS3"],
    }
    
    const modal3 = {
        modalTitle: "333",
        modalText: "Freelance Project consisting of a Landing Page with the goal of introducing a startup's ideas and email newsletter signups.",
        modalTechText: ["lT1", "lT2", "lT3"],
        modalLearningsText: ["lL1", "lL2", "lL3"],
        modalSummaryText: ["lS1", "lS2", "lS3"],
    }

    const modal4 = {
        modalTitle: "444",
        modalText: "Freelance Project consisting of a Landing Page with the goal of introducing a startup's ideas and email newsletter signups.",
        modalTechText: ["lT1", "lT2", "lT3"],
        modalLearningsText: ["lL1", "lL2", "lL3"],
        modalSummaryText: ["lS1", "lS2", "lS3"],
    }

    const modalArray = [
        "", modal1, modal2, modal3, modal4
    ]

    if (showModal === 0) {
        return (
            <div></div>
        )
    } else {
        return (
            <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                <StyledModalContentContainer onClick={(e) => e.stopPropagation()}>
                    <StyledModalContent>
                        <StyledModalHero>
                            {modalArray[showModal].modalTitle}
                        </StyledModalHero>
                        <StyledModalHeroText>
                            {modalArray[showModal].modalText}
                        </StyledModalHeroText>
                        <ModalTabsComponent showModal={showModal} modalArray={modalArray}/>
                    </StyledModalContent>
                </StyledModalContentContainer>
            </StyledModalWrapper>
        )
    }
}

const ModalTabsComponent = ({showModal, modalArray}) => {
    const [tabSelector, setTabSelector] = useState(0);

    //Returns tab title & maps text as list
    const generateTabContent = (title, mapArray) => {
        return (
                <StyledModalTabContentContainer>
                    <StyledModalTabContentTitle>
                        {title}
                    </StyledModalTabContentTitle>
                    <StyledModalTabContentText>
                        {
                            mapArray.map(item => {
                                return (
                                    <StyledModalTabContentTextItem>{item}</StyledModalTabContentTextItem>
                                    )
                                })
                            }
                    </StyledModalTabContentText>
                </StyledModalTabContentContainer>
        )
    }

    const returnTabContent = () => {
        switch(tabSelector) {
            case 0: {
                
            }
            case 1: {
                return (
                    generateTabContent("Tech", modalArray[showModal].modalTechText)
                )
            }
            case 2: {
                return (
                    generateTabContent("Learnings", modalArray[showModal].modalLearningsText)
                )
            }
            case 3: {
                return (
                    generateTabContent("Summary", modalArray[showModal].modalSummaryText)
                )
            }
            
        }
    }

    return (
        <StyledModalNavWrapper>
            <StyledModalNavContainer>
                <StyledModalTabNavButton onClick={() => setTabSelector(1)}>
                    Tech
                </StyledModalTabNavButton>
                <StyledModalTabNavButton onClick={() => setTabSelector(2)}>
                    Learnings
                </StyledModalTabNavButton>
                <StyledModalTabNavButton onClick={() => setTabSelector(3)}>
                    Summary
                </StyledModalTabNavButton>
            </StyledModalNavContainer>
            <StyledModalTabContent>
                {
                    returnTabContent()
                }
            </StyledModalTabContent>
        </StyledModalNavWrapper>
    )
}


// Body
const SectionContainer = ({section, projectModalSwitcher, showModal, sectionSwitchHandler}) => {
    const projectDisplayAnimation = useSpring({
        transform: section 
        ? 'rotateY(0deg)' 
        : 'rotateY(180deg)'
    })

    return (
        <StyledSectionContainerWrapper>
            <SectionSwitcher section={section} sectionSwitchHandler={sectionSwitchHandler}/>
            <StyledSectionContainerContent>
                <ModalDisplay showModal={showModal} projectModalSwitcher={projectModalSwitcher}/>
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
                <StyledProjectAnimatedContainer style={projectDisplayAnimation}>
                    <ProjectSection section={section} projectModalSwitcher={projectModalSwitcher} />
                </StyledProjectAnimatedContainer>
            </StyledSectionContainerContent>
        </StyledSectionContainerWrapper>
    )
}