import React, { useEffect, useState } from 'react';
import { StyledNavContainer, StyledNavBar, StyledNavigationList, StyledNavLogo, StyledToggler, StyledNavPlaceholder, StyledNavigationListWrapper } from './NavComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

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
    }, [scrollTop]);

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
            <StyledToggler onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </StyledToggler>
        )
    }

    const NavigationLinks = () => {
        return (
            <StyledNavigationListWrapper onClick={() => setOpen(false)}>
                <Fade right>
                    <StyledNavigationList>
                        <ReactScrollLink title="Home" id="homeSection"/>
                        <ReactScrollLink title="Projects" id="projectsSection"/>
                        <ReactScrollLink title="About" id="aboutSection"/>
                        <ReactScrollLink title="Activity" id="activitySection"/>
                        <ReactScrollLink title="Contact" id="contactSection"/>
                    </StyledNavigationList>
                </Fade>
            </StyledNavigationListWrapper>
        )
    }

    return (
        <>
            <NavBarToggler />
            <CollapsibleNav isOpen={isOpen}>
                <NavigationLinks/>
            </CollapsibleNav>
        </>
    )
}