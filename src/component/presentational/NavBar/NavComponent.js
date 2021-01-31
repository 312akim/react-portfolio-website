import React from 'react';
import { StyledNavContainer } from './NavComponentStyles';

export const NavBar = () => {
    return (
        <StyledNavContainer>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </StyledNavContainer>
    );
}