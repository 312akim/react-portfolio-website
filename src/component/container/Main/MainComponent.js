import React, { useState } from 'react';
import { LandingComponent } from '../../presentational/Landing/LandingComponent';
import { ProjectContainer } from '../../presentational/Projects/ProjectsComponent';
import { StyledMainContainer } from './MainComponentStyles';

const MainComponent = () => {
    
    return (
        <StyledMainContainer>
            <div>Nav</div>
            <LandingComponent />
            <ProjectContainer />
            <div>About</div>
            <div>Contact</div>
        </StyledMainContainer>
    )
}

export default MainComponent;