import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent } from '../../../shared/sharedComponents/SectionComponentStyles';

export const AboutComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <div>
                About Section
            </div>
        </StyledSectionComponent>
    )
}