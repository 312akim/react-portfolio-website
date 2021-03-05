import React, { useState } from 'react';
import { StyledNavContainer, StyledNavBar, StyledNavigationList, StyledNavLogo, StyledToggler } from './NavComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent'

export const NavBar = () => {
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