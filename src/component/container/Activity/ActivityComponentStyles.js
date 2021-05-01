import COLORS from '../../../shared/design/colorTheme';
import styled, {keyframes} from 'styled-components';
import { animated } from 'react-spring'
import cloudSvg from '../../../shared/svgs/cloud.svg'

//Animations
const CloudAnimation = keyframes`
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    75% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        display: none;
    }
`

//Section Header 8vh

//8vh + 82vh = 90/100vh
export const StyledCommitWrapper = styled.div`
    width: 100%;
    height: 40vh;
    margin-top: 0;
    
    @media (min-width: 1200px) {
        margin-top: 1vh;
    }
`

export const StyledCommitTitle = styled.h2`
    text-align: left;
    margin-left: 5%;
    margin-top: 0;
    margin-bottom: 1vh;
    color: ${COLORS.primaryLight};
    font-size: 1.4rem;

    @media (min-width: 1200px) {
        margin-bottom: 2vh;
        margin-left: 15%;
        font-size: 1.6rem;
    }
    
`

export const StyledCommitDataWrapper = styled.div`
    
`

export const StyledCommitDate = styled.div`
    display: inline-block;
    color: ${COLORS.primaryLight};
    margin-top: 0.3rem;
    font-size: 1rem;
`

export const StyledCommitComment = styled.div`
    color: ${COLORS.primaryLight};
    margin: 0.1rem 5%;

    @media (min-width: 1200px) {
        margin: 0.3rem 0%;
    }
`

export const StyledCommitGitAnchor = styled.a`
    color: ${COLORS.primaryLight};
`

export const StyledCommitDataContainer = styled.div`
    border: 1px ${COLORS.secondaryLight} solid;
    width: 90%;
    margin-left: 5%;
    margin-top: 2%;
    padding: 1% 0;

    @media (min-width: 768px) {
        margin-top: 3%;
    }

    @media (min-width: 1200px) {
        margin: 1vh;
        width: 70%;
        margin-left: 15%;
    }
`

export const StyledCloudContainer = styled.div`
    position: absolute;
    opacity: 1;
    width: 100%;

    @media (min-width: 1200px) {
        width: 21%;
        left: 72%;
        margin-top: 14%;
    }
`

export const StyledCloudImg = styled.img`
    position: absolute;
    width: 30%;
    left: 68%;
`

export const StyledCloudWrapper = styled.div`
    opacity: 0;
    animation: ${CloudAnimation} 6s linear;
`

export const StyledCommitListContainer = styled.div`
    margin-top: 5%;

    @media (min-width: 768px) {
        margin-top: 0%;
    }
`