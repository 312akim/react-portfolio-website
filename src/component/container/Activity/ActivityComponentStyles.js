import COLORS from '../../../shared/design/colorTheme';
import styled from 'styled-components';
import { animated } from 'react-spring'

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