import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader, StyledSectionText  } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledAboutHero, StyledAboutCubeTextContainer, StyledCubeContainer, StyledCube, StyledCubeFace} from './AboutComponentStyles';

export const AboutComponent = () => {
    const [prevFace, setPrevFace] = useState('rotateY(0deg)');
    const [cubeFace, setCubeFace] = useState(0);

    // X keeps being 0?
    const cubeFaceSetter = (n, transform) => {
        setCubeFace(n);
        orderArray.push(transform);
        console.log('order 1 '+ orderArray);
        let x = orderArray.shift();
        console.log('x: ' + x)
        console.log('order 2 ' + orderArray);
        setPrevFace(x);
        console.log('order 3 ' + orderArray);
        console.log("prev face:" + prevFace);
    }

    
    const redTransform = 'rotateY(0deg)'
    const greenTransform = 'rotateY(90deg)'
    const blueTransform = 'rotateY(180deg)'
    const yellowTransform = 'rotateY(270deg)'
    //Logs previous transform
    const orderArray = [redTransform];
    
    const CubePositionComponent = () => {
        switch (cubeFace) {
            case 0:
                return (
                    //Default Red
                    <>
                        <StyledCube transform={redTransform} prevFace={prevFace}>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
            case 1:
                return (
                    //Green
                    <>
                        <StyledCube transform={greenTransform} prevFace={prevFace}>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
            case 2:
                return (
                    //Blue
                    <>
                        <StyledCube transform={blueTransform} prevFace={prevFace}>
                            <InnerCubeComponent />
                        </StyledCube>
                    </>
                )
            case 3:
                return (
                    //Yellow
                    <>
                        <StyledCube transform={yellowTransform} prevFace={prevFace}>
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
                    transform='rotateY(-90deg)' 
                    backgroundColor='green' 
                    
                    onMouseLeave={() => console.log('exited red')}
                >
                    <StyledSectionSubheader>
                        Intro Cube
                    </StyledSectionSubheader>
                    <StyledSectionText>
                        Lorem Ipsum
                    </StyledSectionText>
                </StyledCubeFace>
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
                <span onClick={() => cubeFaceSetter(0, redTransform)}>
                    Red
                </span>
                <span onClick={() => cubeFaceSetter(1, greenTransform)}>
                    Green
                </span>
                <span onClick={() => cubeFaceSetter(2, blueTransform)}>
                    Blue
                </span>
                <span onClick={() => cubeFaceSetter(3, yellowTransform)}>
                    Yellow
                </span>
            </div>
            <CubeComponent />
        </StyledSectionComponent>
    )
}