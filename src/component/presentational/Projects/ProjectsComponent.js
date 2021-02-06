import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardButton, StyledGithubLink, StyledModalContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardTitle, StyledSectionContainer, StyledSectionHeader } from './ProjectsComponentStyles';
import projectPlaceholder from '../../../shared/images/project-placeholder.png'

export const ProjectsContainer = () => {

    const SectionContainer = () => {
        return (
            <StyledSectionContainer>
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
                <StyledProjectCard>
                    <StyledProjectCardImage src={projectPlaceholder}/>
                    <StyledProjectCardTitle>
                        Apparel Store
                    </StyledProjectCardTitle>
                    <StyledCardButton>
                        Read More
                    </StyledCardButton>
                </StyledProjectCard>
                <StyledGithubLink>
                    Github Link here
                </StyledGithubLink>
                <StyledProjectCard>
                    <StyledProjectCardImage />
                    <StyledProjectCardTitle>
                        Animation Project
                    </StyledProjectCardTitle>
                    <StyledCardButton>
                        Read More
                    </StyledCardButton>
                </StyledProjectCard>
                <StyledGithubLink>
                    Github Link here
                </StyledGithubLink>
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