import React, { useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledMainHeaderContainer, 
    StyledNavigatorCaret, StyledDropdownHeader, StyledDropdownContent,
    StyledDropdownSection, StyledDropdownContainer, StyledNavigatorItemTitle, StyledNavigatorItemContainer, StyledDropdownSlot, StyledNavigatorListContainer,
StyledNavigatorList, StyledAppContainer, StyledMainContentContainer, StyledNavigatorContainer, StyledDropdownImage } from './AboutComponentStyles';
import { useTransition, animated, config } from 'react-spring'
import businessImage from '../../../shared/images/business.jpg';
import creativeImage from '../../../shared/images/creativity.jfif';
import peopleImage from '../../../shared/images/people.jfif';
import Fade from 'react-reveal/Fade';

export const AboutComponent = () => {
    const AboutMainComponent = () => {
        return (
            <StyledMainHeaderContainer>
              <StyledAppContainer>
                  <AnimatedNavigator />
              </StyledAppContainer>
            </StyledMainHeaderContainer>
        )
    }

    //On-Hover Content
    const CompanyDropdown = () => {
        return (
            <StyledDropdownContainer>
                <StyledDropdownSection>
                    <div>
                        <StyledDropdownHeader>
                            Achieve
                        </StyledDropdownHeader>
                        <StyledDropdownContent>
                        <li>
                                Loream Ipsum
                            </li>
                            <li>
                                Loream Ipsum
                            </li>
                            <li>
                                Loream Ipsum
                            </li>
                        </StyledDropdownContent>
                    </div>
                </StyledDropdownSection>
            </StyledDropdownContainer>
        )
    }

    const DevelopersDropdown = () => {
        return (
            <StyledDropdownContainer>
                  <StyledDropdownSection>
                    <div>
                        <StyledDropdownHeader>
                            Love Coding
                        </StyledDropdownHeader>
                        <StyledDropdownContent>
                        <li>
                                Loream Ipsum
                            </li>
                            <li>
                                Loream Ipsum
                            </li>
                            <li>
                                Loream Ipsum
                            </li>
                        </StyledDropdownContent>
                    </div>
                </StyledDropdownSection>
            </StyledDropdownContainer>
        );
    };

    const ProductsDropdown = () => {
        return (
          <StyledDropdownContainer>
                  <StyledDropdownSection>
                    <div>
                        <StyledDropdownHeader>
                            Entrepreneur
                        </StyledDropdownHeader>
                        <StyledDropdownContent>
                            <li>
                                Loream Ipsum
                            </li>
                            <li>
                                Loream Ipsum
                            </li>
                            <li>
                                Loream Ipsum
                            </li>
                        </StyledDropdownContent>
                    </div>
                </StyledDropdownSection>
          </StyledDropdownContainer>
        );
    };

    const HoverImage = (props) => {
        switch (props.image) {
            case 0: return (
                <StyledDropdownImage src={businessImage} />
            )

            case 1: return (
                <StyledDropdownImage src={creativeImage} />
            )

            case 2: return (
                <StyledDropdownImage src={peopleImage} />
            )
        }
    }

    //On-Hover Content End

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

    const Navigator = ({children}) => {
        return (
            <StyledNavigatorListContainer>
                <StyledNavigatorList>{children}</StyledNavigatorList>
            </StyledNavigatorListContainer>
        )
    }

    const AnimatedNavigator = () => {
        const [mainContent, setMainContent] = useState(
            <div></div>
        );
        const [activeIndices, setActiveIndices] = useState([]);

        const currentIndex = activeIndices[activeIndices.length -1];
        
        const navigatorConfig = [
            { title: "Entrepreneur at Heart", dropdown: ProductsDropdown },
            { title: "Why I love Coding", dropdown: DevelopersDropdown },
            { title: "What I hope to Achieve", dropdown: CompanyDropdown }
        ];

        const navigatorSelectFunction = (i) => {
            setActiveIndices([...activeIndices, i]);
            setMainContent(contentSetter(i));
        }

        const onMouseEnter = i => {
            navigatorSelectFunction(i);
        };

        const contentSetter = (index) => {
            switch(index) {
                case 0: return (
                    <StyledMainContentContainer key={0}>
                        <Fade up>
                            <ProductsDropdown />
                        </Fade>
                    </StyledMainContentContainer>
                )
                case 1: return (
                    <StyledMainContentContainer key={1}>
                        <Fade up>
                            <DevelopersDropdown />
                        </Fade>
                    </StyledMainContentContainer>
                )
                case 2: return (
                    <StyledMainContentContainer key={2}>
                        <Fade up>
                            <CompanyDropdown />
                        </Fade>
                    </StyledMainContentContainer>
                )
                default: return (
                    <div></div>
                )
            }
        }

        return (
          <>
            <StyledSectionHeader>
              About Me
            </StyledSectionHeader>
            <Navigator>
              {navigatorConfig.map((n, index) => {
                return (
                  <NavigatorItem
                    title={n.title}
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
            </Navigator>
            {mainContent}
          </>
        );
    }

    // Main
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight} height='100vh'>
            <AboutMainComponent />
        </StyledSectionComponent>
    )
}