import styled from 'styled-components';
import COLORS from '../../../shared/design/colorTheme';

export const StyledNavContainer = styled.div`
    height: 6vh;
    background: ${COLORS.primaryDark};
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

export const StyledNavigationList = styled.ul`
    display: inline-block;
    float: right;
    margin-right: 5%;
`

export const StyledToggler = styled.div`
    display: inline-block;
    float: right;
    margin-right: 5%;
`