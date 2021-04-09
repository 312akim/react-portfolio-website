import React from 'react';
import { StyledMainContainer } from './MainComponentStyles';
import { AboutComponent } from '../About/AboutComponent'
import { ContactComponent } from '../../presentational/Contact/ContactComponent';
import { LandingComponent } from '../../presentational/Landing/LandingComponent';
import { ProjectsComponent } from '..//Projects/ProjectsComponent';
import { ActivityComponent } from '../../presentational/Activity/ActivityComponent';
import { NavBar } from '../NavBar/NavComponent';

const MainComponent = () => {

    // React-scroll only seems to work on id props set on plain html divs.
    return (
        <StyledMainContainer>

            <NavBar />

            <div id="homeSection">
                <LandingComponent />
            </div>

            <div id="projectsSection">
                <ProjectsComponent />
            </div>

            <div id="aboutSection">
                <AboutComponent />
            </div>

            <div id="activitySection">
                <ActivityComponent />
            </div>
            
            <div id="contactSection">
                <ContactComponent />
            </div>

        </StyledMainContainer>
    )
}

export default MainComponent; 