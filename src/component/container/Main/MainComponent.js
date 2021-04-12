import React from 'react';
import { StyledMainContainer } from './MainComponentStyles';
import { AboutComponent } from '../About/AboutComponent'
import { ContactComponent } from '../../presentational/Contact/ContactComponent';
import { LandingComponent } from '../../presentational/Landing/LandingComponent';
import { ProjectsComponent } from '..//Projects/ProjectsComponent';
import { ActivityComponent } from '../../presentational/Activity/ActivityComponent';
import { NavBar } from '../NavBar/NavComponent';
import Fade from 'react-reveal/Fade';

const MainComponent = () => {

    // React-scroll only seems to work on id props set on plain html divs.
    return (
        <StyledMainContainer>

            <NavBar />

            <div id="homeSection">
                <Fade left>
                    <LandingComponent />
                </Fade>
            </div>

            <div id="projectsSection">
                <Fade right>
                    <ProjectsComponent />
                </Fade>
            </div>

            <div id="aboutSection">
                <Fade left>
                    <AboutComponent />
                </Fade>
            </div>

            <div id="activitySection">
                <Fade right>
                    <ActivityComponent />
                </Fade>
            </div>
            
            <div id="contactSection">
                <Fade left>
                    <ContactComponent />
                </Fade>
            </div>

        </StyledMainContainer>
    )
}

export default MainComponent; 