import React, { useState } from 'react';
import { StyledDefaultButton, StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledModalTabContentContainer, StyledGithubLink, StyledModalContentContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardsContainer, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainerContent, StyledSectionIconContainer, StyledSectionSwitcher, StyledAltProjectCardsContainer, StyledModalHeroTitle, StyledModalContent, StyledModalWrapper, StyledProjectAnimatedContainer, StyledSectionContainerWrapper, StyledModalNavWrapper, StyledModalNavContainer, StyledModalHeaderContainer, StyledModalTabContent, StyledModalTabContentTextListItem, StyledModalSubheader,StyledModalTabContentList, StyledModalHeroText, StyledModalTabContentTextSummary, StyledModalExitButton } from './ProjectsComponentStyles';
import { StyledImageCropContainer } from '../../../shared/sharedComponents/ImageStyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useSpring } from 'react-spring';

// Component Cards Text config
import { projectComponentCardTextConfig } from './ProjectComponentText';
import { uuidv4 } from '../../../shared/sharedComponents/HelperUtil';

export const ProjectsComponent = () => {

    //Used to change visual of Section Switcher depending on state
    const [section, setSection]  = useState(true);

    //State to represent which project modal to show.
    const [showModal, setShowModal] = useState(0);

    const sectionSwitchHandler = () => {
        setSection(!section);
    }

    const projectModalSwitcher = (modalIndex: number) => {
        setShowModal(modalIndex);
    }

    // Main
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryDark} fontColor={({theme}) => theme.primaryLight}>
            <SectionContainer section={section} projectModalSwitcher={projectModalSwitcher} sectionSwitchHandler={sectionSwitchHandler} showModal={showModal} setShowModal={setShowModal}/>
        </StyledSectionComponent>
    )
}

interface ProjectSectionInterface {
    section: boolean,
    projectModalSwitcher: (modalIndex: number) => void,
}

// Which projects page to display
const ProjectSection = ({section, projectModalSwitcher}: ProjectSectionInterface) => {
    if (section) {
        return (
            <StyledProjectCardsContainer>
                <ProjectSectionContent sliceStart={0} sliceEnd={2} projectModalSwitcher={projectModalSwitcher} />
            </StyledProjectCardsContainer>
        )
    } else {
        return (
            <StyledAltProjectCardsContainer>
                <ProjectSectionContent sliceStart={2} sliceEnd={4} projectModalSwitcher={projectModalSwitcher} />
            </StyledAltProjectCardsContainer>
        )
    }
}

interface ProjectSectionContentParams {
    sliceStart: number,
    sliceEnd: number,
    projectModalSwitcher: (modalIndex: number) => void,
}

const ProjectSectionContent = ({sliceStart, sliceEnd, projectModalSwitcher}: ProjectSectionContentParams): JSX.Element => {
    return (
        <>
            {
                projectComponentCardTextConfig.slice(sliceStart, sliceEnd).map(project => {
                    return (
                        <StyledProjectCard key={uuidv4()}>
                            <StyledImageCropContainer height={'40vh'}>
                                <StyledProjectCardImage src={project.image} alt={project.imageAlt}/>
                            </StyledImageCropContainer>
                            <StyledCardHoverContainer>
                                <StyledProjectCardTitle>
                                    {project.title}
                                </StyledProjectCardTitle>
                                <StyledProjectInformation>
                                    {project.description}
                                </StyledProjectInformation>
                                <StyledReadMore onClick={() => projectModalSwitcher(project.modalIndex)}>
                                    Read More
                                </StyledReadMore>
                                <StyledGithubLink 
                                    href={project.gitLink}
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                                    Github
                                </StyledGithubLink>
                            </StyledCardHoverContainer>
                        </StyledProjectCard>
                    )
                })
            }
        </>
    )
}

interface SectionSwitcherInterface {
    section: boolean,
    sectionSwitchHandler: () => void,
}

// Project Section Display Switcher & arrow icon
const SectionSwitcher = ({section, sectionSwitchHandler}: SectionSwitcherInterface) => {
    if (section) {
        return (
            <StyledSectionSwitcher right={'0%'} onClick={() => sectionSwitchHandler()}>
                <StyledSectionIconContainer>
                    <FontAwesomeIcon icon={faAngleRight} size="4x" />
                </StyledSectionIconContainer>
            </StyledSectionSwitcher>
        )
    } else {
        return (
            <StyledSectionSwitcher right={'85%'} onClick={() => sectionSwitchHandler()}>
                <StyledSectionIconContainer>
                    <FontAwesomeIcon icon={faAngleLeft} size="4x" />
                </StyledSectionIconContainer>
            </StyledSectionSwitcher>
        )
    }
}

interface ModalDisplayInterface {
    showModal: number,
    projectModalSwitcher: (modalIndex: number) => void,
    setShowModal: (modalIndex: number) => void,
}

// Modal Display
const ModalDisplay = ({showModal, projectModalSwitcher, setShowModal}: ModalDisplayInterface) => {

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
                                <a href={`${projectComponentCardTextConfig[showModal-1].websiteLink}`} target='_blank' rel="noreferrer">
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

interface ModalTabsComponentInterface {
    showModal: number,
    setShowModal: (modalIndex: number) => void,
}

const ModalTabsComponent = ({showModal, setShowModal}: ModalTabsComponentInterface) => {
    const [tabSelector, setTabSelector] = useState(0);

    //Returns tab title & maps text as list
    const returnTabContentList = (title: string, mapArray: string[]) => {
        return (
                <StyledModalTabContentContainer>
                    <StyledModalSubheader>
                        {title}
                    </StyledModalSubheader>
                    <StyledModalTabContentList>
                        {   
                            mapArray.map(item => {
                                return (
                                    <StyledModalTabContentTextListItem key={uuidv4()}>{item}</StyledModalTabContentTextListItem>
                                )
                            })
                        }
                    </StyledModalTabContentList>
                </StyledModalTabContentContainer>
        )
    }

    const returnTabContentSummary = (title: string, mapArray: string[]) => {
        return (
                <StyledModalTabContentContainer>
                    <StyledModalSubheader>
                        {title}
                    </StyledModalSubheader>
                    <StyledModalTabContentList>
                        {mapArray.map((item) => {
                            return (
                                <StyledModalTabContentTextSummary key={uuidv4()}>
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
            // if 0  or not other cases, return case 1
            default:
            case 0: 
            case 1: 
                return (
                    returnTabContentList("Tech", projectComponentCardTextConfig[showModal-1].modal.modalTechText)
                )
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

interface SectionContainerInterface {
    section: boolean,
    projectModalSwitcher: (modalIndex: number) => void,
    showModal: number,
    setShowModal: (modalIndex: number) => void,
    sectionSwitchHandler: () => void,
}

// Body
const SectionContainer = ({section, projectModalSwitcher, showModal, setShowModal, sectionSwitchHandler}: SectionContainerInterface) => {
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