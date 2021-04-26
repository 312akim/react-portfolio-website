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
    margin-top: 1vh;
`

export const StyledCommitTitle = styled.h2`
    margin-top: 0;
    color: ${COLORS.primaryLight};
`

export const StyledCommitDataWrapper = styled.div`

`

export const StyledCommitDate = styled.div`
    display: inline-block;
    color: ${COLORS.primaryLight};
    margin-top: 0.5rem;
`

export const StyledCommitComment = styled.div`
    color: ${COLORS.primaryLight};
    margin: 0.5rem 0;
`

export const StyledCommitGitAnchor = styled.a`
    color: ${COLORS.primaryLight};
`

export const StyledCommitDataContainer = styled.div`
    margin: 1vh;
    border: 1px ${COLORS.primaryLight} dotted;
    width: 70%;
    margin-left: 15%;
`

export const StyledCloudContainer = styled.div`
    position: absolute;
    width: 21%;
    left: 72%;
    margin-top: 14%;
    opacity: 1;
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