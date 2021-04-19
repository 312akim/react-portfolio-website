import styled from 'styled-components';
import COLORS from '../../../shared/design/colorTheme';
import {animated} from 'react-spring'

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
    position: fixed;
    top: 6vh;
    height: 94vh;
    width: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 2;
`

export const StyledNavigationList = styled.ul`
    display: inline-block;
    float: right;
    background: green;
    width: 100%;
    height: 100%;
`

export const StyledToggler = styled.div`
    display: inline-block;
    margin-top: 1vh;
    float: right;
    margin-right: 5%;
`

export const AnimatedContainer = styled(animated.div)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 35%;
    z-index: 2;
`