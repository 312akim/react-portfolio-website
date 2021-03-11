import React from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader, StyledSectionText  } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledAboutHero, StyledAboutCubeTextContainer, StyledCubeContainer, StyledCube, StyledCubeFace } from './AboutComponentStyles';

export const AboutComponent = () => {

    const CubeComponent = () => {
        return (
            <StyledCubeContainer>
                <StyledCube>
                    <StyledCubeFace transform='rotateY(0deg)' backgroundColor='red'>
                        <StyledSectionSubheader>
                            Entrepreneur at heart
                        </StyledSectionSubheader>
                        <StyledSectionText>
                            Growing up with parents who were small business owners, business has always been part of my life.
                            I've had the unique opportunity to see how product, service and interaction work together to uplift a business
                            beyond all expectations or bury it's future. Consequently i'm always thinking of opportunities and keeping an
                            eye out for improvements.
                        </StyledSectionText>
                    </StyledCubeFace>
                    <StyledCubeFace transform='rotateY(-90deg)' backgroundColor='yellow'>
                        <StyledAboutCubeTextContainer height={'41vh'}>
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
                                Sample Text
                            </StyledSectionText>
                            <StyledSectionText>
                                2. It's a creative outlet that doesn't require talent
                            </StyledSectionText>
                            <StyledSectionText>
                                Never before have I experienced such a natural and easy way to express my own creativity. Where I normally struggle
                                in arts or music, coding lets me express creativity in my own way.
                            </StyledSectionText>
                        </StyledAboutCubeTextContainer>
                    </StyledCubeFace>
                    <StyledCubeFace transform='rotateX(-90deg)' backgroundColor='blue'>
                        <StyledAboutCubeTextContainer height={'17vh'}>
                            <StyledSectionSubheader>
                                What I want to achieve
                            </StyledSectionSubheader>
                            <StyledSectionText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </StyledSectionText>
                        </StyledAboutCubeTextContainer>
                    </StyledCubeFace>
                </StyledCube>
            </StyledCubeContainer>
        )
    }

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight}>
            <StyledSectionHeader>
                About Me
            </StyledSectionHeader>
            <StyledAboutHero src=''/>

            <CubeComponent />
        </StyledSectionComponent>
    )
}