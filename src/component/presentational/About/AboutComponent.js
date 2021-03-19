import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader, StyledSectionText  } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledAboutHero, StyledAboutCubeTextContainer, StyledCubeContainer, StyledCube, StyledCubeFace,
StyledBaseTimer, StyledBaseTimerSvg, StyledBaseTimerCircle, StyledBaseTimerPathElapsed, StyledBaseTimerClock } from './AboutComponentStyles';

let animationTimer = 18000;
let animationTimerSeconds = animationTimer/1000;

export const AboutComponent = () => {
    const [cubeFace, setCubeFace] = useState(0);
    const [cubeTimer, setCubeTimer] = useState(0);
    
    useEffect(() => {
        const timer = cubeTimer > 0 && setInterval(() => setCubeTimer(cubeTimer-1), 1000)
    return () => clearInterval(timer);
    }, [cubeTimer]);

    //Currently if you cancel face animation, will hit 18 seconds later if looking at other face.
    const cubeFaceSetter = (n) => {
        setCubeFace(n);
        setCubeTimer(animationTimerSeconds);
        console.log("Timer should be set to 18: " + cubeTimer);
        
        
        setTimeout(() => setCubeFace(0), animationTimer);
    }

    const CubeFaceTimerComponent = () => {
        return (
            <StyledBaseTimer>
                <StyledBaseTimerSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <StyledBaseTimerCircle>
                    <StyledBaseTimerPathElapsed cx="50" cy="50" r="45" />
                    </StyledBaseTimerCircle>
                </StyledBaseTimerSvg>
                <StyledBaseTimerClock>
                    {formatTimeLeft(cubeTimer)}
                </StyledBaseTimerClock>
            </StyledBaseTimer>
        )
    }

    const formatTimeLeft = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
        // The output in MM:SS format
        return `${minutes}:${seconds}`;
    }

    const timerCounter = () => {
        console.log('start');
        setCubeTimer(animationTimerSeconds);
        while (cubeTimer > 0) {
            setTimeout(
                () => {
                setCubeTimer(cubeTimer - 1);
                console.log("Cube Timer: " + cubeTimer);
            }, 1000)
        }
        return 'finished';
    }

    const CubePositionComponent = () => {
        switch (cubeFace) {
            case 0:
                return (
                    //Default
                    <>
                        <StyledCube transform='rotateX(45deg) rotateY(45deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                        <CubeFaceTimerComponent />
                    </>
                )
            case 1:
                return (
                    //Red
                    <>
                        <StyledCube transform='rotateY(0deg) rotateX(0deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                        <CubeFaceTimerComponent />
                    </>
                )
            case 2:
                return (
                    //Yellow
                    <>
                        <StyledCube transform='rotateY(90deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                        <CubeFaceTimerComponent />
                    </>
                )
            case 3:
                return (
                    //Blue
                    <>
                        <StyledCube transform='rotateY(0deg) rotateX(90deg)'>
                            <InnerCubeComponent />
                        </StyledCube>
                        <CubeFaceTimerComponent />
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
                    onMouseEnter={() => cubeFaceSetter(1)}
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
                    transform='rotateY(-90deg)' 
                    backgroundColor='yellow'
                    onMouseEnter={() => cubeFaceSetter(2)}
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
                    transform='rotateX(-90deg)' 
                    backgroundColor='blue'
                    onMouseEnter={() => cubeFaceSetter(3)}
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

            <CubeComponent />
        </StyledSectionComponent>
    )
}