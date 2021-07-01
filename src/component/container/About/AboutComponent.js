import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import {
    StyledNavigatorCaret, StyledDropdownHeader, StyledDropdownContent,
    StyledDropdownSection, StyledDropdownContainer, StyledNavigatorItemTitle, StyledNavigatorItemContainer, StyledDropdownSlot, StyledNavigatorListContainer,
StyledNavigatorList, StyledAppContainer, StyledMainContentContainer, StyledNavigatorContainer, StyledDropdownImage, StyledNavigatorContentContainer, StyledNavigatorWrapper, StyledDropdownTextLine } from './AboutComponentStyles';
import businessImage from '../../../shared/images/business.jpg';
import creativeImage from '../../../shared/images/creativity.jfif';
import peopleImage from '../../../shared/images/people.jfif';
import Fade from 'react-reveal/Fade';
import { StyledImageCropContainer } from '../../../shared/sharedComponents/ImageStyledComponents';
import { aboutComponentTextConfig } from './AboutComponentText';

export const AboutComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight} height='100vh'>
            <AboutMainComponent />
        </StyledSectionComponent>
    )
}

const AboutMainComponent = () => {
    return (
        <StyledAppContainer>
            <StyledSectionHeader>
                About Me
            </StyledSectionHeader>
            <AnimatedNavigator />
        </StyledAppContainer>
    )
}

const NavigatorHeaderCards = ({children}) => {
    return (
        <StyledNavigatorListContainer>
            <StyledNavigatorList>{children}</StyledNavigatorList>
        </StyledNavigatorListContainer>
    )
}

const HoverImage = (props) => {
    switch (props.image) {
        case 0: return (
            <StyledImageCropContainer desktopHeight={'23vh'} height={'17vh'} position={'absolute'}>
                <StyledDropdownImage src={businessImage} />
            </StyledImageCropContainer>
        )

        case 1: return (
            <StyledImageCropContainer desktopHeight={'23vh'} height={'17vh'} position={'absolute'}>
                <StyledDropdownImage src={creativeImage} />
            </StyledImageCropContainer>
        )

        case 2: return (
            <StyledImageCropContainer desktopHeight={'23vh'} height={'17vh'} position={'absolute'}>
                <StyledDropdownImage src={peopleImage} />
            </StyledImageCropContainer>
        )
    }
}

const AnimatedNavigator = () => {
    const [mainContent, setMainContent] = useState(<div></div>);

    const [activeIndices, setActiveIndices] = useState([]);

    const currentIndex = activeIndices[activeIndices.length -1];

    const navigatorSelectFunction = (i) => {
        setActiveIndices([...activeIndices, i]);
        setMainContent(contentSetter(i));
    }

    const onMouseEnter = i => {
        navigatorSelectFunction(i);
    };

    const returnDropdownText = (textObject) => {
        return (
            <StyledDropdownContainer>
                <StyledDropdownSection>
                    <StyledDropdownHeader>
                        {textObject.title}
                    </StyledDropdownHeader>
                    <StyledDropdownContent>
                        <Fade up cascade big>
                            {
                                textObject.text.map((line) => {
                                    return (
                                            <StyledDropdownTextLine>
                                                    {line}
                                            </StyledDropdownTextLine>
                                    )
                                })
                            }
                        </Fade>
                    </StyledDropdownContent>
                </StyledDropdownSection>
            </StyledDropdownContainer>
        )
    }

    // Sets and returns dropdown Text from aboutComponentTextConfig
    const contentSetter = (index) => {
        switch(index) {
            case 0: return (
                <StyledMainContentContainer key={0}>
                    <Fade down>
                        {returnDropdownText(aboutComponentTextConfig[0])}
                    </Fade>
                </StyledMainContentContainer>
            )
            case 1: return (
                <StyledMainContentContainer key={1}>
                    <Fade down>
                        {returnDropdownText(aboutComponentTextConfig[1])}
                    </Fade>
                </StyledMainContentContainer>
            )
            case 2: return (
                <StyledMainContentContainer key={2}>
                    <Fade down>
                        {returnDropdownText(aboutComponentTextConfig[2])}
                    </Fade>
                </StyledMainContentContainer>
            )
            default: return (
                <div></div>
            )
        }
    }

    return (
        <StyledNavigatorWrapper>
            <NavigatorHeaderCards>
                {aboutComponentTextConfig.map((n, index) => {
                    return (
                        <NavigatorItem
                        title={n.navTitle}
                            key={index}
                            index={index}
                            onMouseEnter={onMouseEnter}
                            >
                            {   //Logical Operator Short Circuiting, returns Component after 1st pass
                                currentIndex === index && (
                                    <StyledNavigatorCaret />
                                    )
                                }
                        </NavigatorItem>
                    );
                })}
            </NavigatorHeaderCards>
            <StyledNavigatorContentContainer>
                {mainContent}
            </StyledNavigatorContentContainer>
        </StyledNavigatorWrapper>
    );
}

const NavigatorItem = (props) => {
        
    const onMouseEnter = () => {
        props.onMouseEnter(props.index);
    };

    return (
        <StyledNavigatorContainer>
            <StyledNavigatorItemContainer onMouseEnter={onMouseEnter} onFocus={onMouseEnter}>
                <HoverImage image={props.index}/>
                <StyledNavigatorItemTitle>
                    {props.title}
                </StyledNavigatorItemTitle>
                <StyledDropdownSlot>{props.children}</StyledDropdownSlot>
            </StyledNavigatorItemContainer>
        </StyledNavigatorContainer>
    );
}