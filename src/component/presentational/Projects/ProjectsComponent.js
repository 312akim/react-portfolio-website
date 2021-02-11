import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCardHover, StyledGithubLink, StyledModalContainer, StyledProjectCard, StyledProjectCardImage, StyledProjectCardTitle, StyledProjectInformation, StyledReadMore, StyledSectionContainer, StyledSectionHeader } from './ProjectsComponentStyles';
import projectPlaceholder from '../../../shared/images/project-placeholder.png'

export const ProjectsContainer = () => {

    const SectionContainer = () => {
        return (
            <StyledSectionContainer>
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
                <StyledProjectCardTitle>
                    Apparel Store
                </StyledProjectCardTitle>
                <StyledProjectCard>
                    <StyledProjectCardImage src={projectPlaceholder}/>
                    <StyledCardHover>
                        <StyledProjectInformation>
                            Apparel store uses technologies such as etc etc.
                        </StyledProjectInformation>
                        <StyledReadMore>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink>
                            Github Link here
                        </StyledGithubLink>
                    </StyledCardHover>
                </StyledProjectCard>
                <StyledProjectCardTitle>
                    Animation Project
                </StyledProjectCardTitle>
                <StyledProjectCard>
                    <StyledProjectCardImage src={projectPlaceholder}/>
                    <StyledCardHover>
                        <StyledProjectInformation>
                            Animation project is a product of etc etc etc
                        </StyledProjectInformation>
                        <StyledReadMore>
                            Read More
                        </StyledReadMore>
                        <StyledGithubLink>
                            Github Link here
                        </StyledGithubLink>
                    </StyledCardHover>
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