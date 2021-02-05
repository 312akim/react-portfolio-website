import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledModalContainer, StyledSectionContainer, StyledSectionHeader } from './ProjectsComponentStyles';


export const ProjectsContainer = () => {

    const SectionContainer = () => {
        return (
            <StyledSectionContainer>
                <StyledSectionHeader>
                    Projects
                </StyledSectionHeader>
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