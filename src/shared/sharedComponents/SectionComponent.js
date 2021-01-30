import React from 'react';
import COLORS from '../design/colorTheme';
import { StyledSectionComponent } from './SectionComponentStyles';

export const LightSection = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight} />
    )
}

export const DarkSection = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryDark} />
    )
}