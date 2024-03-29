import React, { useEffect, useState } from 'react';
import { StyledCollapsibleNavContainer, StyledNavContainer, StyledNavBar, StyledNavigationList, StyledNavLogo, StyledToggler, StyledAnimatedContainer, StyledNavigationListWrapper } from './NavComponentStyles';
import { ReactScrollLink } from '../../../shared/sharedComponents/ReactScrollComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faLaptopCode, faUserAstronaut, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useSpring } from 'react-spring'

export const NavBar = () => {

    const [scrolling, setScrolling] = useState<boolean>(true);

    // Navbar background sets to transparent when not at top of page.
    useEffect(() => {
        const scrollTop = 0;
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
                <StyledNavLogo>
                    <ReactScrollLink title="AK" id="homeSection" underline={false} marginBottom={'0'}></ReactScrollLink>
                </StyledNavLogo>
                <CollapsibleNavComponent />
            </StyledNavBar>
        </StyledNavContainer>
    );
}

interface OpenStateHook {
    isOpen: boolean,
    toggleIsOpen: () => void,
}

const CollapsibleNavComponent = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toggleIsOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <StyledCollapsibleNavContainer>
            <NavBarToggler isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            <CollapsibleNavLinks isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
        </StyledCollapsibleNavContainer>
    )
}

const NavBarToggler = ({toggleIsOpen, isOpen}: OpenStateHook) => {
    const navBurgerAnimation = useSpring({
        transform: isOpen 
        ? 'rotate(90deg)' 
        : 'rotate(0deg)'
    })

    return (
        <StyledToggler onClick={() => toggleIsOpen()} style={navBurgerAnimation}>
            <FontAwesomeIcon icon={faBars} size="2x" />
        </StyledToggler>
    )
}



const CollapsibleNavLinks = ({isOpen}: OpenStateHook) => {
    const navWindowAnimation = useSpring({
        right: isOpen 
        ? '0%' 
        : '-50%'
    })

    return (
        <StyledAnimatedContainer style={navWindowAnimation}>
            <StyledNavigationListWrapper>
                <SideBarNavigationLinks />
            </StyledNavigationListWrapper>
        </StyledAnimatedContainer>
    )
}

const SideBarNavigationLinks = () => {
    return (
        <StyledNavigationList>
            <ReactScrollLink title="Home" id="homeSection" faIcon={faHome}/>
            <ReactScrollLink title="Projects" id="projectsSection" faIcon={faLaptopCode}/>
            <ReactScrollLink title="About" id="aboutSection" faIcon={faUserAstronaut}/>
            <ReactScrollLink title="Activity" id="activitySection" faIcon={faCodeBranch}/>
            <ReactScrollLink title="Contact" id="contactSection" faIcon={faEnvelope}/>
        </StyledNavigationList>
    )
}