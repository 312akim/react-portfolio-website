import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader, StyledSectionText  } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledAboutHero } from './AboutComponentStyles';

export const AboutComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <StyledSectionHeader>
                About Section
            </StyledSectionHeader>
            <StyledAboutHero src=''/>


            <StyledSectionSubheader>
                Entrepreneur at heart
            </StyledSectionSubheader>
            <StyledSectionText>
                Growing up with parents who were small business owners, business has always been part of my life.
                I've had the unique opportunity to see how product, service and interaction work together to uplift a business
                beyond all expectations or bury it's future. Consequently i'm always thinking of opportunities and keeping an
                eye out for improvements.
            </StyledSectionText>

            
            <StyledSectionSubheader>
                Why I love coding
            </StyledSectionSubheader>
            <StyledSectionText>
                There are 2 reasons I truly love coding.
            </StyledSectionText>
            <StyledSectionText>
                1. It lets me to turn my ideas into practice
            </StyledSectionText>
            <StyledSectionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.
            </StyledSectionText>
            <StyledSectionText>
                2. It's a creative outlet that doesn't require talent
            </StyledSectionText>
            <StyledSectionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.
            </StyledSectionText>


            <StyledSectionSubheader>
                What I want to achieve
            </StyledSectionSubheader>
            <StyledSectionText>
                
            </StyledSectionText>
        </StyledSectionComponent>
    )
}