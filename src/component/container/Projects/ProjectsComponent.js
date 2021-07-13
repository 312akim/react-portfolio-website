import React, { useState } from 'react';
import { StyledDefaultButton, StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledModalTabContentContainer, StyledGithubLink, StyledModalContentContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainerContent, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHeroTitle, StyledModalContent, StyledModalWrapper, StyledProjectAnimatedContainer, StyledSectionContainerWrapper, StyledModalNavWrapper, StyledModalNavContainer, StyledModalHeaderContainer, StyledModalTabContent, StyledModalTabContentTextListItem, StyledModalSubheader,StyledModalTabContentList, StyledModalHeroText, StyledModalTabContentTextSummary, StyledModalExitButton } from './ProjectsComponentStyles';
import { StyledImageCropContainer } from '../../../shared/sharedComponents/ImageStyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useSpring } from 'react-spring';

// Component Cards Text config
import { projectComponentCardTextConfig } from './ProjectComponentText';

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
            <SectionContainer section={section} projectModalSwitcher={projectModalSwitcher} sectionSwitchHandler={sectionSwitchHandler} showModal={showModal} setShowModal={setShowModal}/>
        </StyledSectionComponent>
    )
}

// Which projects page to display
const ProjectSection = ({section, projectModalSwitcher}) => {

    if (section) {
        return (
            <StyledProjectCardsContainer>
                {
                   projectComponentCardTextConfig.slice(0, 2).map((project) => {
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
                                    <StyledReadMore onClick={() => projectModalSwitcher(project.onClick)}>
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
                        projectComponentCardTextConfig.slice(2, 4).map((project) => {
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
                                        <StyledReadMore onClick={() => projectModalSwitcher(project.onClick)}>
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
const ModalDisplay = ({showModal, projectModalSwitcher, setShowModal}) => {

    if (showModal === 0) {
        return (
            <div></div>
        )
    } else {
        return (
            <StyledModalWrapper onClick={() => projectModalSwitcher(0)}>
                <StyledModalContentContainer onClick={(e) => e.stopPropagation()}>
                    <StyledModalContent>
                        <StyledModalHeaderContainer>
                            <StyledModalHeroTitle>
                                {projectComponentCardTextConfig[showModal-1].modal.modalTitle}
                            </StyledModalHeroTitle>
                            {   // If websiteLink exists, return visit button
                                projectComponentCardTextConfig[showModal-1].websiteLink ?
                                <a href={`${projectComponentCardTextConfig[showModal-1].websiteLink}`} target='_blank'>
                                    <StyledDefaultButton margin='0' >
                                        Visit Website
                                    </StyledDefaultButton>
                                </a>
                                :
                                <div></div>
                            }
                        </StyledModalHeaderContainer>
                        <StyledModalSubheader>
                            Objective
                        </StyledModalSubheader>
                        <StyledModalHeroText>
                            {projectComponentCardTextConfig[showModal-1].modal.modalObjective}
                        </StyledModalHeroText>
                        <ModalTabsComponent showModal={showModal} setShowModal={setShowModal} />
                    </StyledModalContent>
                </StyledModalContentContainer>
            </StyledModalWrapper>
        )
    }
}

const ModalTabsComponent = ({showModal, setShowModal}) => {
    const [tabSelector, setTabSelector] = useState(0);

    //Returns tab title & maps text as list
    const returnTabContentList = (title, mapArray) => {
        return (
                <StyledModalTabContentContainer>
                    <StyledModalSubheader>
                        {title}
                    </StyledModalSubheader>
                    <StyledModalTabContentList>
                        {   
                            mapArray.map(item => {
                                return (
                                    <StyledModalTabContentTextListItem key={title+item}>{item}</StyledModalTabContentTextListItem>
                                )
                            })
                        }
                    </StyledModalTabContentList>
                </StyledModalTabContentContainer>
        )
    }

    const returnTabContentSummary = (title, mapArray) => {
        return (
                <StyledModalTabContentContainer>
                    <StyledModalSubheader>
                        {title}
                    </StyledModalSubheader>
                    <StyledModalTabContentList>
                        {mapArray.map((item) => {
                            return (
                                <StyledModalTabContentTextSummary>
                                    {item}
                                </StyledModalTabContentTextSummary>
                            )
                        })}
                    </StyledModalTabContentList>
                </StyledModalTabContentContainer>
        )
    }

    const returnTabContent = () => {
        switch(tabSelector) {
            case 0: {
                // if 0 return case 1
            }
            case 1: {
                return (
                    returnTabContentList("Tech", projectComponentCardTextConfig[showModal-1].modal.modalTechText)
                )
            }
            case 2: {
                return (
                    returnTabContentList("Learnings", projectComponentCardTextConfig[showModal-1].modal.modalLearningsText)
                )
            }
            case 3: {
                return (
                    returnTabContentSummary("Summary", projectComponentCardTextConfig[showModal-1].modal.modalSummaryText)
                )
            }
            
        }
    }

    return (
        <StyledModalNavWrapper>
            <StyledModalNavContainer>
                <StyledDefaultButton onClick={() => setTabSelector(1)}>
                    Tech
                </StyledDefaultButton>
                <StyledDefaultButton onClick={() => setTabSelector(2)}>
                    Learnings
                </StyledDefaultButton>
                <StyledDefaultButton onClick={() => setTabSelector(3)}>
                    Summary
                </StyledDefaultButton>
            </StyledModalNavContainer>
            <StyledModalTabContent>
                {
                    returnTabContent()
                }
            </StyledModalTabContent>
            <StyledModalExitButton onClick={() => setShowModal(0)}>
                Close
            </StyledModalExitButton>
        </StyledModalNavWrapper>
    )
}


// Body
const SectionContainer = ({section, projectModalSwitcher, showModal, setShowModal, sectionSwitchHandler}) => {
    const projectDisplayAnimation = useSpring({
        transform: section 
        ? 'rotateY(0deg)' 
        : 'rotateY(180deg)'
    })

    return (
        <StyledSectionContainerWrapper>
            <SectionSwitcher section={section} sectionSwitchHandler={sectionSwitchHandler}/>
            <StyledSectionContainerContent>
                <ModalDisplay showModal={showModal} projectModalSwitcher={projectModalSwitcher} setShowModal={setShowModal}/>
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