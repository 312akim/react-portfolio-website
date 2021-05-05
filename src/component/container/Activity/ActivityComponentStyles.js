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

//8vh + 80vh = 88/100vh
export const StyledCommitWrapper = styled.div`
    width: 100%;
    height: 39vh;
    margin-top: 0;
    
    @media (min-width: 1200px) {
        margin-top: 1vh;
    }
`

export const StyledCommitTitle = styled.h2`
    position: absolute;
    text-align: left;
    margin-left: 2%;
    padding: 0 1%;
    margin-top: -1.5vh;
    color: ${COLORS.primaryLight};
    font-size: 1.2rem;
    background: black;
    width: auto;
    box-shadow: 3px 2px 2px ${COLORS.secondaryLight};

    @media (min-width: 480px) {
        font-size: 1.4rem;
        box-shadow: 5px 4px 4px ${COLORS.secondaryLight};
    }

    @media (min-width: 768px) {
        margin-top: 1vh;
        padding-bottom: 0.3vh;
    }

    @media (min-width: 1200px) {
        margin-top: -1vh;
        margin-left: 12%;
        font-size: 1.6rem;
    }
    
`

export const StyledCommitDataWrapper = styled.div`
    overflow-y: auto;
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
    box-shadow: 5px 3px 4px ${COLORS.secondaryDark};

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

`