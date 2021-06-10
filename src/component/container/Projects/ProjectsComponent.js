import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContentContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainerContent, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHero, StyledModalText, StyledModalWrapper, StyledProjectAnimatedContainer, StyledSectionContainerWrapper, StyledModalNavWrapper, StyledModalNavContainer, StyledModalBubbleNav } from './ProjectsComponentStyles';
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
            onClick: () => projectModalSwitcher(1)
        },
        {
            title: "Apparel Store",
            description: "Responsive SPA e-commerce store with front & back-end functionality. Cart and checkout functionality achieved through integration with Snipcart.",
            image: apparelStoreMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(2)
        },
        {
            title: "Portfolio Website",
            description: "The code behind this portfolio site, featuring the Github Octokit api to load my latest updates.",
            image: tokenizeAmazonMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(3)
        },
        {
            title: "Bubble Tea App",
            description: "In-Progress. My first React-Native project.",
            image: tokenizeAmazonMockup,
            imageAlt: "",
            gitLink: "https://github.com/312akim/apparel-store-mern",
            onClick: () => projectModalSwitcher(4)
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

                    {/* <StyledProjectCard>
                        <StyledImageCropContainer height={'40vh'}>
                            <StyledProjectCardImage src={apparelStoreMockup} alt=''/>
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
                        <StyledImageCropContainer height={'40vh'}>
                            <StyledProjectCardImage src={apparelStoreMockup} alt=''/>
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
                    </StyledProjectCard> */}

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

const modalConfig = {
    proj1: {
        title: "",
        titleText: "",
        modalContent: [
            {
                content1title: "",
                list1: [1, 2, 3, 4]
            },
            {	
                content1title: "",
                list2: [1, 2, 3, 4]
            },
            {	
                content1title: "",
                list3: [1, 2, 3, 4]
            },
        ]
    },
    proj2: {
        title: "",
        titleText: "",
        modalContent: [
            {
                content2title: "",
                list1: [1, 2, 3, 4]
            },
            {	
                content2title: "",
                list2: [1, 2, 3, 4]
            },
            {	
                content2title: "",
                list3: [1, 2, 3, 4]
            },
        ]
    },
    proj3: {
        title: "",
        titleText: "",
        modalContent: [
            {
                content3title: "",
                list1: [1, 2, 3, 4]
            },
            {	
                content3title: "",
                list2: [1, 2, 3, 4]
            },
            {	
                content3title: "",
                list3: [1, 2, 3, 4]
            },
        ]
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
                            Tokenize Amazon
                        </StyledModalHero>
                        <div>
                            Freelance Project consisting of a Landing Page with the goal of introducing a startup's ideas and email newsletter signups.
                        </div>
                        <StyledModalText>
                            <hr />
                            
                            <div>
                                <h3>Tech / Integrations:</h3>
                                <ul>
                                    <li>Placeholder Placeholder Placeholder</li>
                                    <li>Placeholder Placeholder Placeholder</li>
                                    <li>Netlify Deployment</li>
                                    <li>MailChimp newsletter signup integration</li>
                                </ul>
                            </div>

                            <div>
                                <h3>Learnings / Difficulties:</h3>
                                <ul>
                                    <li>Transition Animations</li>
                                    <li>Styled Components Global Theme &amp; Theme Provider</li>
                                    <li>Youtube video embed &amp; video scaling</li>
                                    <li>SVG &amp; image</li>
                                </ul>
                            </div>

                            <div>
                                <h3>Key Takeaway:</h3>
                                <ul>
                                    <li>Working with UI/UX Design Team</li>
                                    <li>Email Newsletter integration via MailChimp &amp; form submission</li>
                                    <li>Youtube video embed &amp; video scaling</li>
                                    <li>PDF File opening in new tab</li>
                                </ul>
                            </div>
                        </StyledModalText>
                    </StyledModalContentContainer>
                </StyledModalWrapper>
            )
        case 2:
            return (
                <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                    <StyledModalContentContainer>
                        <StyledModalHero>
                            Apparel Store Website
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

const ModalTabs = () => {
    return (
        <StyledModalNavWrapper>
            <StyledModalNavContainer>
                <StyledModalBubbleNav>
                    Tech/Integrations
                </StyledModalBubbleNav>
                <StyledModalBubbleNav>
                    Learnings / Difficulties
                </StyledModalBubbleNav>
                <StyledModalBubbleNav>
                    Summary
                </StyledModalBubbleNav>
            </StyledModalNavContainer>
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