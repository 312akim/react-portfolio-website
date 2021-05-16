import styled from 'styled-components';
import { animated } from 'react-spring'

export const StyledNavContainer = styled.div`
    height: 6vh;
    background: ${({theme, scroll}) => scroll ? theme.primaryDark : 'transparent'};
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
    color: ${({theme}) => theme.secondaryLight};
    font-size: 20px;
    width: ${props => props.width ? props.width : '100%'};
    height: 100%;
`

export const StyledNavigationList = styled.ul`
    margin-left: 0%;
`

export const StyledCollapsibleNavContainer = styled.div`
    
`

export const StyledToggler = styled.div`
    display: inline-block;
    margin-top: 1vh;
    float: right;
    margin-right: 5%;
    color: ${({theme}) => theme.secondaryLight};
    transition: transform 0.2s;

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

    @media (min-width: 768px) {
        width: 25%;
    }

    @media (min-width: 1200px) {
        padding-top: 0;
        top: 8vh;
        background: none;
        height: auto;
        width: 15%;
    }
`