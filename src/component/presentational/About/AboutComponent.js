import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader, StyledSectionText  } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledAboutHero, StyledAboutCubeTextContainer, StyledCubeContainer, StyledCube, StyledCubeFace} from './AboutComponentStyles';

export const AboutComponent = () => {
    const [prevFace, setPrevFace] = useState(0);
    const [cubeFace, setCubeFace] = useState(0);

    const cubeFaceSetter = (n) => {
        setCubeFace(n);
    }

    const CubePositionComponent = () => {
        switch (cubeFace) {
            case 0:
                return (
                    //Default
                    <>
                        <StyledCube transform='rotateX(0deg) rotateY(0deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
            case 1:
                return (
                    //Red
                    <>
                        <StyledCube transform='rotateY(0deg) rotateX(0deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
            case 2:
                return (
                    //Yellow
                    <>
                        <StyledCube transform='rotateY(-90deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
            case 3:
                return (
                    //Blue
                    <>
                        <StyledCube transform='rotateY(0deg) rotateX(90deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
        }
    }

    const InnerCubeComponent = () => {
        return (
            <div>
                <StyledCubeFace 
                    transform='rotateY(0deg)' 
                    backgroundColor='red' 
                    
                    onMouseLeave={() => console.log('exited red')}
                >
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
                <StyledCubeFace 
                    transform='rotateY(90deg)' 
                    backgroundColor='yellow'
                    
                    onMouseLeave={() => console.log('exited yellow')}
                >
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
                <StyledCubeFace 
                    transform='rotateY(-180deg)' 
                    backgroundColor='blue'
                    
                    onMouseLeave={() => console.log('exited blue')}
                >
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
            </div>
        )
    }

    const CubeComponent = () => {
        return (
            <StyledCubeContainer>
                <CubePositionComponent>
                    <InnerCubeComponent />
                </CubePositionComponent>
            </StyledCubeContainer>
        )
    }

    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight} height='150vh'>
            <StyledSectionHeader>
                About Me
            </StyledSectionHeader>
            <StyledAboutHero src=''/>
            <div>
                <div onMouseEnter={() => cubeFaceSetter(1)}>
1
                </div>
                <div onMouseEnter={() => cubeFaceSetter(2)}>
2
                </div>
                <div onMouseEnter={() => cubeFaceSetter(3)}>
3
                </div>
            </div>
            <CubeComponent />
        </StyledSectionComponent>
    )
}