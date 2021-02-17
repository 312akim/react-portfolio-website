import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainer, StyledSectionHeader, StyledSectionIconContainer, StyledSectionSwitcher } from './ProjectsComponentStyles';
import projectPlaceholder from '../../../shared/images/project-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const ProjectsContainer = () => {

    //Used to change visual of Section Switcher depending on state
    const [section, setSection]  = useState(false);

    const SectionContainer = () => {
        return (
            <StyledSectionContainer>
                <StyledSectionSwitcher>
                    <StyledSectionIconContainer>
                        <FontAwesomeIcon icon={faAngleRight} size="4x" />
                    </StyledSectionIconContainer>
                </StyledSectionSwitcher>
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
                <StyledProjectCard>
                    <StyledProjectCardImage src={projectPlaceholder}/>
                    <StyledCardHoverContainer>
                        <StyledProjectCardTitle>
                            Apparel Store
                        </StyledProjectCardTitle>
                        <StyledProjectInformation>
                            Apparel store uses technologies such as etc etc.
                        </StyledProjectInformation>
                        <StyledReadMore>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink>
                            Github
                        </StyledGithubLink>
                    </StyledCardHoverContainer>
                </StyledProjectCard>
                <StyledProjectCard>
                    <StyledProjectCardImage src={projectPlaceholder}/>
                    <StyledCardHoverContainer>
                        <StyledProjectCardTitle>
                            Animation Project
                        </StyledProjectCardTitle>
                        <StyledProjectInformation>
                            Animation project is a product of etc etc etc
                            Animation project is a product of etc etc etc
                            Animation project is a product of etc etc etc
                        </StyledProjectInformation>
                        <StyledReadMore>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink>
                            Github
                        </StyledGithubLink>
                    </StyledCardHoverContainer>
                </StyledProjectCard>
            </StyledSectionContainer>
        )
    }

    const ProjectModal = () => {
        return (
            <StyledModalContainer>

            </StyledModalContainer>
        )
    }

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryDark}>
            <SectionContainer />
        </StyledSectionComponent>
    )
}