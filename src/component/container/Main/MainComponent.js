import React, { useState } from 'react';
import { StyledMainContainer } from './MainComponentStyles';
import { AboutComponent } from '../../presentational/About/AboutComponent';
import { ContactComponent } from '../../presentational/Contact/ContactComponent';
import { LandingComponent } from '../../presentational/Landing/LandingComponent';
import { ProjectsContainer } from '../../presentational/Projects/ProjectsComponent';
import { NavBar } from '../../presentational/NavBar/NavComponent';

const MainComponent = () => {
    

    // React-scroll only seems to work on id's set on divs.
    return (
        <StyledMainContainer>

            <NavBar />

            <div id="homeSection">
                <LandingComponent />
            </div>

            <div id="projectsSection">
                <ProjectsContainer />
            </div>

            <div id="aboutSection">
                <About />
            </div>
            
            <div id="contactSection">
                <ContactComponent />
            </div>

        </StyledMainContainer>
    )
}

export default MainComponent; 