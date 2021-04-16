import styled from 'styled-components';
import COLORS from '../../../shared/design/colorTheme';

export const StyledNavContainer = styled.div`
    height: 6vh;
    background: ${props => props.scroll ? COLORS.primaryDark : 'transparent'};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
`

export const StyledNavBar = styled.div`

`

export const StyledNavLogo = styled.div`
    display: inline-block;
`

export const StyledNavigationListWrapper = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.5);
`

export const StyledNavigationList = styled.ul`
    display: inline-block;
    float: right;
    background: green;
    width: 30%;
    height: 100vh;
`

export const StyledToggler = styled.div`
    display: inline-block;
    margin-top: 1vh;
    float: right;
    margin-right: 5%;
`