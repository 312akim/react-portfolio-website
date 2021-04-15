import React, { useEffect, useState } from 'react';
import { StyledNavContainer, StyledNavBar, StyledNavigationList, StyledNavLogo, StyledToggler, StyledNavPlaceholder } from './NavComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent'

export const NavBar = () => {

    const [isOpen, setOpen] = useState(false);

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
    }, [scrollTop]);

    const CollapsibleNav = ({isOpen}) => {
        if (isOpen) {
            return (
                <NavigationLinks />
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const NavBarToggler = () => {
        return (
            <StyledToggler onClick={() => setOpen(!isOpen)}>
                ToggleNav
            </StyledToggler>
        )
    }

    const NavigationLinks = () => {
        return (
            <StyledNavigationList>
                <ReactScrollLink title="Home" id="homeSection"/>
                <ReactScrollLink title="Projects" id="projectsSection"/>
                <ReactScrollLink title="About" id="aboutSection"/>
                <ReactScrollLink title="Activity" id="activitySection"/>
                <ReactScrollLink title="Contact" id="contactSection"/>
            </StyledNavigationList>
        )
    }

    return (
        <StyledNavContainer scroll={scrolling}>
            <StyledNavBar>
                <StyledNavLogo>Logo Here</StyledNavLogo>
                <NavBarToggler />
                <CollapsibleNav isOpen={isOpen}>
                    <NavigationLinks/>
                </CollapsibleNav>
            </StyledNavBar>
        </StyledNavContainer>
    );
}