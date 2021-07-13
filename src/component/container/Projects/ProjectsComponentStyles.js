import styled, { keyframes, css } from 'styled-components';
import { animated } from 'react-spring'
import { flexColumnCentered, flexRowCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';
import { StyledDefaultButton } from '../../../shared/sharedComponents/SectionComponentStyles';

// Animations
const hoverCardTopFadeAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const hoverCardBotFadeAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const switchIconAnim = (x) => keyframes`
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(${x}px);
    }

    100%: {
        transform: translateX(0px);
    }
`

export const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

// Components
export const StyledSectionContainerWrapper = styled.div`
    height: auto;
    padding-bottom: 4vh;
`

export const StyledSectionContainerContent = styled.div`
    text-align: center;
    position: relative;
    width: 100vw;
`

export const StyledSectionIconContainer = styled.div`
    display: inline-block;
    color: ${({theme}) => theme.primaryLight};
    height: 53vh;
    margin-top: 47vh;
    animation: ${switchIconAnim(7)} 1.2s linear infinite;

    @media (min-width: 768px) {
        color: ${({theme}) => theme.primaryLight};
        animation: ${switchIconAnim(15)} 1.5s linear infinite;
    }
`

export const StyledProjectAnimatedContainer = styled(animated.div)`
    transform-style: preserve-3d;
`

export const StyledProjectCardsContainer = styled.div`
    background: ${({theme}) => theme.primaryDark};
`

export const StyledAltProjectCardsContainer = styled(animated.div)`
    background: ${({theme}) => theme.primaryDark};
    transform: rotateY(180deg);
`

export const StyledSectionSwitcher = styled.div`
    position: absolute;
    height: 109vh;
    width: 15%;
    background: ${({theme}) => theme.primaryDark};
    right: ${props => props.position};
    z-index: 1;
    
    :hover div {
        animation: ${switchIconAnim} 1.5s linear infinite;
        color: ${({theme}) => theme.primaryLight};
    }

    @media (min-width: 768px) {
        :hover {
            background: black;
        }
        :hover div {
            animation: ${switchIconAnim} 1.5s linear infinite;
            color: ${({theme}) => theme.primaryLight};
        }
    }
`

export const StyledProjectCard = styled.div`
    position: relative;
    width: 60%;
    max-width: 768px;
    height: 40vh;
    margin: 6vh auto 5vh auto;
    background: white;
    border-radius: 4px;
    box-shadow: 6px 6px black;
    border-left: 1px solid white;

    @media (min-width: 480px) {
        box-shadow: 7px 7px black;
    }

    @media (min-width: 1200px) {
        box-shadow: 9px 9px black;
    }
`

export const StyledProjectCardImage = styled.img`
    height: 40vh;
    width: auto;
    margin-left: -40%;

    @media (min-width: 500px) {
        margin-left: -15%;
    }

    @media (min-width: 1200px) {
        margin-left: 0%;
        margin-top: 0;
    }
`

export const StyledProjectCardTitle = styled.h2`
    ${flexRowCentered};
    height: 5vh;
    padding: 0 0;
    margin: 1vh 5%;
    color: white;
`

export const StyledProjectInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    max-height: 20vh;
    margin: 0 5% 1.5vh 5%;
    padding: 1%;
    color: white;

    @media (min-width: 480px) {
        margin-bottom: 2.5vh;
    }
`

export const StyledReadMore = styled(StyledDefaultButton)`
    height: 4vh;
    margin: 0 0 1.5vh 0;
    border-radius: 0px;
`

export const StyledGithubLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    height: 4vh;
    color: white;

    :hover {
        color: ${({theme}) => theme.secondaryLight};
    }
`

export const StyledCardHoverContainer = styled.div`
    position: absolute;
    ${flexColumnCentered};
    top: 0px;
    left: -1px;
    width: 100.6%;
    opacity: 0;
    border-radius: 4px;
    height: 40.1vh;
    opacity: 0.9;
    background: black;

    @media (min-width: 768px) {
        width: 100.4%;
    }
    
    @media (min-width: 1025px) {
        opacity: 0;
        background: transparent;

        :hover {
            opacity: 0.9;
            background: black;
            
            ${StyledProjectCardTitle} {
                animation: ${hoverCardTopFadeAnim} 0.3s linear;
            }
            
            ${StyledProjectInformation} {
                animation: ${hoverCardTopFadeAnim} 0.3s linear;
            }
            
            ${StyledReadMore} {
                animation: ${hoverCardBotFadeAnim} 0.3s linear;
            }
            
            ${StyledGithubLink} {
                animation: ${hoverCardBotFadeAnim} 0.3s linear;
            }
        }
    }
`
//Project Modals
export const StyledModalWrapper = styled.div`
    height: 109vh;
    position: absolute;
    ${flexColumnCentered};
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    animation: ${fadeInAnimation} 0.5s linear;
    z-index: 3;
`

export const StyledModalContentContainer = styled.div`
    background: ${({theme}) => theme.primaryDark};
    border: 1px solid ${({theme}) => theme.primaryLight};
    border-radius: 20px;
    height: 102vh;
    padding: 2vh 5%;
    max-width: 800px;
    width: 90%;

    @media (min-width: 768px) {
        border-radius: 0px;
        height: 96vh;
    }
`

export const StyledModalHeroTitle = styled.h2`
    color: ${({theme}) => theme.primaryLight};
    height: 2vh;

    @media (min-width: 480px) {
    }
`

export const StyledModalHeroText = styled.div`
    text-align: left;
    max-height: 18vh;
    margin-bottom: 3vh;
    padding: 1vh 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
`

export const StyledModalContent = styled.div`
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;

    @media(min-width: 768px) {
        max-width: 645px;
    }
`


// Modal Tab Nav
export const StyledModalNavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
`

export const StyledModalNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 10vh;
    border-left: 2px solid black;
    border-right: 2px solid black;
    
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        background: transparent;
    }

    @media (min-width: 628px) {
        border: none;
    }
`

export const StyledModalExitButton = styled(StyledDefaultButton)`
    background: ${({theme}) => theme.primaryAlert};
    align-self: center;

    :hover {
        background: ${({theme}) => theme.secondaryAlert};
        color: white;
    }
`

export const StyledModalTabContent = styled.div`
    
`

// Modal tab content
export const StyledModalTabContentContainer = styled.div`
    ${flexColumnCentered};
    height: 36vh;
    margin-bottom: 2vh;

    @media (min-width: 480px) {
        height: 44vh;
        margin-bottom: 3vh;
    }
`

export const StyledModalHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 15vh;
`

export const StyledModalSubheader = styled.h3`
    height: 2vh;
    align-self: start;
`

export const StyledModalTabContentList = styled.ul`
    width: 100%;
    overflow-y: scroll;
    height: 42vh;
    padding: 10px 0;
    border-top: 1px solid ${({theme}) => theme.primaryLight};
    border-bottom: 1px solid ${({theme}) => theme.primaryLight};

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.secondaryDark};
        border-radius: 10px;
    }
`

export const StyledModalTabContentTextListItem = styled.li`
    margin-bottom: 2vh;
`

export const StyledModalTabContentTextSummary = styled.div`
    margin-bottom: 2vh;

    @media (min-width: 768px) {
        margin-bottom: 1.5vh;
    }
`