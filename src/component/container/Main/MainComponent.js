import React, { useState } from 'react';
import { AboutComponent } from '../../presentational/About/AboutComponent';
import { ContactComponent } from '../../presentational/Contact/ContactComponent';
import { LandingComponent } from '../../presentational/Landing/LandingComponent';
import { ProjectContainer } from '../../presentational/Projects/ProjectsComponent';
import { StyledMainContainer } from './MainComponentStyles';

const MainComponent = () => {
    
    return (
        <StyledMainContainer>
            <div>Nav</div>
            <LandingComponent />
            <ProjectContainer />
            <AboutComponent />
            <ContactComponent />
        </StyledMainContainer>
    )
}

export default MainComponent;