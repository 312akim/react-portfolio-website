import React, { useEffect, useState } from 'react';
import { StyledNavContainer, StyledNavBar, StyledRightArrowIconWrapper, StyledNavigationList, StyledNavLogo, StyledToggler, AnimatedContainer, StyledNavigationListWrapper } from './NavComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


import {useSpring} from 'react-spring'

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

const CollapsibleNav = ({isOpen, setOpen}) => {
    if (isOpen) {
        return (
            <NavigationLinks setOpen={setOpen}/>
        )
    } else {
        return (
            <div></div>
        )
    }
}

const NavigationLinks = ({setOpen}) => {
    const props = useSpring({right: '0%', from: {right: '-100%'}})

    return (
        <AnimatedContainer style={props} onClick={() => setOpen(false)}>
            <StyledNavigationListWrapper>
                <StyledRightArrowIconWrapper>
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </StyledRightArrowIconWrapper>
                <StyledNavigationList>
                    <ReactScrollLink title="Home" id="homeSection"/>
                    <ReactScrollLink title="Projects" id="projectsSection"/>
                    <ReactScrollLink title="About" id="aboutSection"/>
                    <ReactScrollLink title="Activity" id="activitySection"/>
                    <ReactScrollLink title="Contact" id="contactSection"/>
                </StyledNavigationList>
            </StyledNavigationListWrapper>
        </AnimatedContainer>
    )
}