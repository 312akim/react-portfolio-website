import React, { useEffect, useState } from 'react';
import { StyledNavContainer, StyledNavBar, StyledNavigationList, StyledNavLogo, StyledToggler, StyledAnimatedContainer, StyledNavigationListWrapper } from './NavComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useSpring } from 'react-spring'

export const NavBar = () => {

    const [scrolling, setScrolling] = useState(true);

    const scrollTop = 0;
    // Navbar background sets to transparent when not at top of page.
    useEffect(() => {
        const onScroll = () => {
            let currentPosition = window.pageYOffset;

            if (currentPosition > scrollTop) {
                setScrolling(false);
            } else {
                setScrolling(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <StyledNavContainer scroll={scrolling}>
            <StyledNavBar>
                <StyledNavLogo>Logo Here</StyledNavLogo>
                <CollapsibleNavComponent />
            </StyledNavBar>
        </StyledNavContainer>
    );
}

const CollapsibleNavComponent = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <NavBarToggler isOpen={isOpen} setOpen={setOpen} />
            <CollapsibleNav isOpen={isOpen} setOpen={setOpen}/>
        </>
    )
}

const NavBarToggler = ({setOpen, isOpen}) => {
    return (
        <StyledToggler onClick={() => setOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} size="2x" />
        </StyledToggler>
    )
}

const CollapsibleNav = ({isOpen}) => {

        return (
            <NavigationLinks isOpen={isOpen}/>
        )

}

const NavigationLinks = ({isOpen}) => {
    const navAnimation = useSpring({
        right: isOpen 
        ? '0%' 
        : '-50%'
    })

    return (
        <StyledAnimatedContainer style={navAnimation}>
            <StyledNavigationListWrapper>
                <StyledNavigationList>
                    <ReactScrollLink title="Home" id="homeSection"/>
                    <ReactScrollLink title="Projects" id="projectsSection"/>
                    <ReactScrollLink title="About" id="aboutSection"/>
                    <ReactScrollLink title="Activity" id="activitySection"/>
                    <ReactScrollLink title="Contact" id="contactSection"/>
                </StyledNavigationList>
            </StyledNavigationListWrapper>
        </StyledAnimatedContainer>
    )
}