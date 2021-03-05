import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader  } from '../../../shared/sharedComponents/SectionComponentStyles';

export const AboutComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <StyledSectionHeader>
                About Section
            </StyledSectionHeader>
        </StyledSectionComponent>
    )
}