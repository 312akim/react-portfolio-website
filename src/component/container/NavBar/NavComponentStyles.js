import styled, { keyframes } from 'styled-components';
import COLORS from '../../../shared/design/colorTheme';
import { animated } from 'react-spring'

export const StyledNavContainer = styled.div`
    height: 6vh;
    background: ${props => props.scroll ? COLORS.primaryDark : 'transparent'};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
`

export const StyledNavBar = styled.div`

`

export const StyledNavLogo = styled.div`
    display: inline-block;
`

export const StyledNavigationListWrapper = styled.div`
    display: inline-block;
    float: right;
    background: transparent;
    color: ${COLORS.secondaryLight};
    font-size: 20px;
    width: 100%;
    height: 100%;
`

export const StyledNavigationList = styled.ul`
    margin-left: 0%;
`

export const StyledToggler = styled.div`
    display: inline-block;
    margin-top: 1vh;
    float: right;
    margin-right: 5%;
    color: ${COLORS.secondaryLight};
`

export const AnimatedContainer = styled(animated.div)`
    position: fixed;
    text-align: right;
    top: 0;
    padding-right: 5%;
    height: 100vh;
    width: 40%;
    z-index: -1;
    padding-top: 8vh;
    background: black;

    @media (min-width: 768px) {
        width: 25%;
    }

    @media (min-width: 1200px) {
        padding-top: 0;
        top: 8vh;
        background: none;
        height: auto;
        width: 6%;
    }
`