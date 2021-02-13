import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHoverContainer, StyledGithubLink, StyledModalContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainer, StyledSectionHeader, StyledSectionSwitcher } from './ProjectsComponentStyles';
import projectPlaceholder from '../../../shared/images/project-placeholder.png'

export const ProjectsContainer = () => {

    const [section, setSection]  = useState(false);

    const SectionContainer = () => {
        return (
            <StyledSectionContainer>
                <StyledSectionSwitcher>

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