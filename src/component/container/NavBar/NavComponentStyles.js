import styled from 'styled-components';
import { animated } from 'react-spring'

export const StyledNavContainer = styled.div`
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
    width: 100%;
    height: 10vh;
`

export const StyledNavLogo = styled.div`
    display: inline-block;
`

export const StyledNavigationListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    justify-content: space-around;
    color: ${({theme}) => theme.secondaryLight};
    font-size: 20px;
    width: ${props => props.width ? props.width : '100%'};
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
`

export const StyledToggler = styled.div`
    color: ${({theme}) => theme.secondaryLight};
    transition: transform 0.2s;
    padding: 1px 3px;
    border-radius: 4px;

    :hover {
        transform: rotate(5deg);
    }
`

export const StyledAnimatedContainer = styled(animated.div)`
    position: fixed;
    text-align: right;
    top: 0;
    padding-right: 5%;
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