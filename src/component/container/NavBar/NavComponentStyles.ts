import styled from 'styled-components';
import { animated } from 'react-spring'

interface NavContainerBackground {
    scroll: boolean
}

export const StyledNavContainer = styled.div<NavContainerBackground>`
    height: 10vh;
    background: ${({theme, scroll}) => scroll ? theme.primaryDark : 'transparent'};
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
`

export const StyledNavBar = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    height: 10vh;
    pointer-events: none;
`

export const StyledNavLogo = styled.div`
    display: inline-block;
    margin-left: 4vw;
    color: ${({theme}) => theme.secondaryLight};
    font-size: 32px;
    pointer-events: auto;
`

interface NavigationListWrapperWidth {
    width?: string
}

export const StyledNavigationListWrapper = styled.div<NavigationListWrapperWidth>`
    display: flex;
    flex-direction: column;
    background: transparent;
    justify-content: space-around;
    color: ${({theme}) => theme.secondaryLight};
    font-size: 20px;
    width: ${({width}) => width ? width : '100%'};
    height: 100%;
`

export const StyledNavigationList = styled.ul`
    margin-left: 0%;
`

export const StyledCollapsibleNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 5%;
    height: 10vh;
    pointer-events: auto;
`

export const StyledToggler = styled(animated.div)`
    color: ${({theme}) => theme.secondaryLight};
    padding: 1px 3px;
    border-radius: 4px;
`

export const StyledAnimatedContainer = styled(animated.div)`
    position: fixed;
    text-align: right;
    top: 0;
    height: 100vh;
    width: 40%;
    z-index: -1;
    padding-top: 8vh;
    background: black;

    @media (min-width: 480px) {
        width: 30%;
    }

    @media (min-width: 768px) {
        width: 25%;
    }

    @media (min-width: 1200px) {
        top: 8vh;
        background: none;
        height: auto;
        width: auto;
    }
`