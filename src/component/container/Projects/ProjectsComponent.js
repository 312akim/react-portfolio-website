import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContentContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainerContent, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHero, StyledModalText, StyledModalWrapper, StyledProjectAnimatedContainer, StyledSectionContainerWrapper, StyledModalNavWrapper, StyledModalNavContainer, StyledModalBubbleNav, StyledModalBubbleContent } from './ProjectsComponentStyles';
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
        modalTechText: ["lT1", "lT2", "lT3"],
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
                    <StyledModalHero>
                        {modalArray[showModal].modalTitle}
                    </StyledModalHero>
                    <div>
                        {modalArray[showModal].modalText}
                    </div>
                    <StyledModalText>
                        
                        <ModalTabsComponent showModal={showModal} modalArray={modalArray}/>
                        <hr />
                        
                        <div>
                            <h3>Tech / Integrations:</h3>
                            <ul>
                                {
                                    modalArray[showModal].modalTechText.map(item => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <h3>Learnings / Difficulties:</h3>
                            <ul>
                                {
                                    modalArray[showModal].modalLearningsText.map(item => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <h3>Key Takeaway:</h3>
                            <ul>
                                {
                                    modalArray[showModal].modalSummaryText.map(item => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </StyledModalText>
                </StyledModalContentContainer>
            </StyledModalWrapper>
        )
    }
}

const ModalTabsComponent = ({showModal, modalArray}) => {
    const [bubbleContent, setBubbleContent] = useState(0);

    const bubbleContentSetter = () => {
        switch(bubbleContent) {
            case 0: {
                return (
                    <div></div>
                )
            }
            case 1: {
                return (
                    <div>
                        <div>
                            Tech
                        </div>
                        <div>
                            {modalArray[showModal].modalTechText}
                        </div>
                    </div>
                )
            }
            case 2: {
                return (
                    <div>
                        <div>
                            Learnings
                        </div>
                        <div>
                            {modalArray[showModal].modalLearningsText}
                        </div>
                    </div>
                )
            }
            case 3: {
                return (
                    <div>
                        <div>
                            Summary
                        </div>
                        <div>
                            {modalArray[showModal].modalSummaryText}
                        </div>
                    </div>
                )
            }
            
        }
    }

    return (
        <StyledModalNavWrapper>
            <StyledModalNavContainer>
                <StyledModalBubbleNav onClick={() => setBubbleContent(1)}>
                    Tech
                </StyledModalBubbleNav>
                <StyledModalBubbleNav onClick={() => setBubbleContent(2)}>
                    Learnings
                </StyledModalBubbleNav>
                <StyledModalBubbleNav onClick={() => setBubbleContent(3)}>
                    Summary
                </StyledModalBubbleNav>
            </StyledModalNavContainer>
            <StyledModalBubbleContent>
                {
                    bubbleContentSetter()
                }
            </StyledModalBubbleContent>
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