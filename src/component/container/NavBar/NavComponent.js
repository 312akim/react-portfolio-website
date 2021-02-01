import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { StyledNavContainer, StyledNavBar, StyledNavigationList, StyledNavLogo, StyledToggler } from './NavComponentStyles';

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const ReactScrollLink = ({id, title}) => {
        return (
            <li>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} duration={400}>
                        {title}
                    </Link>
                </a>
            </li>
        )
    }

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
                <ReactScrollLink title="Contact" id="contactSection"/>
            </StyledNavigationList>
        )
    }

    return (
        <StyledNavContainer>
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