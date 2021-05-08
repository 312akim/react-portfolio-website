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
    display: inline-block;
    float: right;
    background: transparent;
    color: ${COLORS.secondaryLight};
    font-size: 20px;
    width: 100%;
    height: 100%;
`

export const StyledNavigationList = styled.ul`
    
`

export const StyledToggler = styled.div`
    display: inline-block;
    margin-top: 1vh;
    float: right;
    margin-right: 2%;
    color: ${COLORS.secondaryLight};
`

export const AnimatedContainer = styled(animated.div)`
    position: fixed;
    text-align: right;
    top: 6vh;
    padding-right: 2%;
    height: auto;
    width: auto;
    z-index: 2;
    padding-top: 2vh;

    @media (min-width: 768px) {
        padding-top: 1vh;
    }

    @media (min-width: 1200px) {
        padding-top: 0;
    }
`