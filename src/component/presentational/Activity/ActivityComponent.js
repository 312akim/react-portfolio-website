import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';

export const ActivityComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryDark}>
            <StyledSectionHeader>
                Recent Activity
            </StyledSectionHeader>
        </StyledSectionComponent>
    )
}