import React, { useState } from 'react';
import { StyledMainContainer } from './MainComponentStyles';
import { AboutComponent } from '../../presentational/About/AboutComponent';
import { ContactComponent } from '../../presentational/Contact/ContactComponent';
import { LandingComponent } from '../../presentational/Landing/LandingComponent';
import { ProjectContainer } from '../../presentational/Projects/ProjectsComponent';
import { NavBar } from '../../presentational/NavBar/NavComponent';

const MainComponent = () => {
    
    return (
        <StyledMainContainer>
            <NavBar />
            <LandingComponent />
            <ProjectContainer />
            <AboutComponent />
            <ContactComponent />
        </StyledMainContainer>
    )
}

export default MainComponent; 