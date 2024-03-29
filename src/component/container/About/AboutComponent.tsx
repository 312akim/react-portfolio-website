import React, { useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledNavigatorCaret, StyledDropdownContent, StyledDropdownSection, StyledDropdownContainer, StyledNavigatorItemTitle, StyledNavigatorItemContainer, StyledDropdownSlot,
StyledNavigatorList, StyledAppContainer, StyledMainContentContainer, StyledNavigatorContainer, StyledDropdownImage, StyledNavigatorContentContainer, StyledNavigatorWrapper, StyledDropdownTextLine, StyledAboutMoreContainer, StyledAboutMoreContentImage, StyledAboutMoreContentTitle, StyledAboutMoreContentTextContainer, StyledAboutMoreContentText, StyledAboutMoreContentWrapper, StyledAboutMoreContentContainer, StyledAboutMoreContentTextLine } from './AboutComponentStyles';
import businessImage from '../../../shared/images/business.jpg';
import creativeImage from '../../../shared/images/creativity.jpg';
import peopleImage from '../../../shared/images/people.jpg';
import Fade from 'react-reveal/Fade';
import { StyledImageCropContainer } from '../../../shared/sharedComponents/ImageStyledComponents';
import { aboutComponentTextConfig, aboutMoreContentConfig } from './AboutComponentText';
import { uuidv4 } from '../../../shared/sharedComponents/HelperUtil';

export const AboutComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryLight} minHeight={'90vh'}>
            <AboutMainComponent />
            <AboutMoreComponent />
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

const HoverImage = (props: {image: number}) => {
    switch (props.image) {
        case 0: return (
            <StyledImageCropContainer largeHeight='200px' largeWidth='200px' height='100px' width='100px' position={'absolute'}>
                <StyledDropdownImage src={businessImage} />
            </StyledImageCropContainer>
        )

        case 1: return (
            <StyledImageCropContainer largeHeight='200px' largeWidth='200px' height='100px' width='100px' position={'absolute'}>
                <StyledDropdownImage src={creativeImage} />
            </StyledImageCropContainer>
        )

        case 2: return (
            <StyledImageCropContainer largeHeight='200px' largeWidth='200px' height='100px' width='100px' position={'absolute'}>
                <StyledDropdownImage src={peopleImage} />
            </StyledImageCropContainer>
        )

        default: return (
            <div></div>
        )
    }
}

interface DropDownTextType {
    title: string,
    text: string[]
}

const AnimatedNavigator = () => {
    const returnDropdownText = (textObject: DropDownTextType) => {
        return (
            <StyledDropdownContainer>
                <StyledDropdownSection>
                    <StyledSectionSubheader>
                        {textObject.title}
                    </StyledSectionSubheader>
                    <StyledDropdownContent>
                        <Fade up cascade big>
                            {
                                textObject.text.map((line: string) => {
                                    return (
                                        <StyledDropdownTextLine key={uuidv4()}>
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
    const contentSetter = (index: number) => {
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

    const [mainContent, setMainContent] = useState(contentSetter(0));

    const [activeIndices, setActiveIndices] = useState([0]);

    const currentIndex = activeIndices[activeIndices.length -1];

    const navigatorSelectFunction = (i: number) => {
        setActiveIndices([i]);
        setMainContent(contentSetter(i));
    }

    const onMouseEnter = (i: number) => {
        navigatorSelectFunction(i);
    };

    return (
        <StyledNavigatorWrapper>
            <StyledNavigatorList>
                {aboutComponentTextConfig.map((n, index) => {
                    return (
                        <NavigatorItem
                        title={n.navTitle}
                        key={uuidv4()}
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
            </StyledNavigatorList>
            <StyledNavigatorContentContainer>
                {mainContent}
            </StyledNavigatorContentContainer>
        </StyledNavigatorWrapper>
    );
}

interface NavigatorItemProps {
    title: string,
    key: string,
    index: number,
    onMouseEnter: (i: number) => void;
    children: React.ReactNode,
}

const NavigatorItem = (props: NavigatorItemProps) => {
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

const AboutMoreComponent = () => {
    return (
        <StyledAboutMoreContainer>
            <StyledSectionSubheader>
                What else am I doing?
            </StyledSectionSubheader>
            <AboutMoreContentMapper config={aboutMoreContentConfig} />
        </StyledAboutMoreContainer>
    )
}

//type AboutMoreContentInterface = {image: string, title: string, text: string[]}[];
type AboutMoreContentInterface = {
    config: {
        image: string,
        title: string,
        text: string[]
    }[]
}

const AboutMoreContentMapper = ({config}: AboutMoreContentInterface) => {
    return (
        <StyledAboutMoreContentWrapper>
            <Fade left>
                {
                    config.map((item, index) => {
                        return (
                            <StyledAboutMoreContentContainer key={uuidv4()}>
                                <StyledImageCropContainer height='280px' width='auto' borderRadius='4px 4px 0 0' largeBorderRadius='4px 0 0 4px'>
                                    <StyledAboutMoreContentImage src={item.image}/>
                                </StyledImageCropContainer>
                                <StyledAboutMoreContentTextContainer>
                                    <StyledAboutMoreContentTitle>
                                        {item.title}:
                                    </StyledAboutMoreContentTitle>
                                    <StyledAboutMoreContentText>

                                        {
                                            item.text.map((textLine: string) => {
                                                return (
                                                    <StyledAboutMoreContentTextLine key={uuidv4()}>
                                                        {textLine}
                                                    </StyledAboutMoreContentTextLine>
                                                )
                                            })
                                        }

                                    </StyledAboutMoreContentText>
                                </StyledAboutMoreContentTextContainer>
                            </StyledAboutMoreContentContainer>
                        )
                    })
                }
            </Fade>
        </StyledAboutMoreContentWrapper>
    )
}