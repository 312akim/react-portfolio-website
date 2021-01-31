import React from 'react';
import { Link } from 'react-scroll';
import { StyledNavContainer } from './NavComponentStyles';

export const NavBar = () => {

    const ReactScrollLink = ({id, title}) => {
        return (
            <li>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} offset={50} duration={500}>
                        {title}
                    </Link>
                </a>
            </li>
        )
    }

    return (
        <StyledNavContainer>
          <ul>
            <ReactScrollLink title="Home" id="homeSection"/>
            <ReactScrollLink title="Projects" id="projectsSection"/>
            <ReactScrollLink title="About" id="aboutSection"/>
            <ReactScrollLink title="Contact" id="contactSection"/>
          </ul>
        </StyledNavContainer>
    );
}