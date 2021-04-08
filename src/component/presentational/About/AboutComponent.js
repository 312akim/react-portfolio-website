import React, { useState, useCallback, useEffect } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader, StyledSectionSubheader, StyledSectionText  } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledMainHeaderContainer, StyledMainHeader, 
    StyledNavigatorCaret, StyledDropdownHeader, StyledDropdownContent,
    StyledDropdownSection, StyledDropdownContainer, StyledNavigatorItemTitle, StyledNavigatorItemContainer, StyledDropdownSlot, StyledNavigatorListContainer,
StyledNavigatorList, StyledAppContainer, StyledMainContentContainer, StyledNavigatorContainer } from './AboutComponentStyles';
import { useTransition, animated, config } from 'react-spring'

export const AboutComponent = () => {
    const AboutMainComponent = () => {
        return (
            <StyledMainHeaderContainer>
              <StyledAppContainer>
                  <AnimatedNavbar />
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
    //On-Hover Content End

    const NavbarItem = (props) => {
        
        const onMouseEnter = () => {
            props.onMouseEnter(props.index);
        };

        const onMouseLeave = () => {
            props.onMouseLeave();
        }

        const onMouseDown = () => {
            props.onMouseDown(props.index);
            console.log("mouse down");
        }

        const onMouseUp = () => {
            props.onMouseUp();
            console.log("mouse up");
        }

        return (
            <StyledNavigatorContainer>
                <StyledNavigatorItemContainer onMouseUp={onMouseUp} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onFocus={onMouseEnter}>
                    <StyledNavigatorItemTitle>{props.title}</StyledNavigatorItemTitle>
                    <StyledDropdownSlot>{props.children}</StyledDropdownSlot>
                </StyledNavigatorItemContainer>
            </StyledNavigatorContainer>
        );
    }

    const Navbar = ({onMouseLeave, children}) => {
        return (
            <StyledNavigatorListContainer onMouseLeave={onMouseLeave}>
                <StyledNavigatorList>{children}</StyledNavigatorList>
            </StyledNavigatorListContainer>
        )
    }

    const navbarConfig = [
        { title: "Entrepreneur at Heart", dropdown: ProductsDropdown },
        { title: "Why I love Coding", dropdown: DevelopersDropdown },
        { title: "What I hope to Achieve", dropdown: CompanyDropdown }
    ];

    const AnimatedNavbar = () => {
        const [mainContent, setMainContent] = useState(
            <div></div>
        );
        const [activeIndices, setActiveIndices] = useState([]);
        const [animationSwitch, setAnimationSwitch] = useState(true);

        const currentIndex = activeIndices[activeIndices.length -1];
        
        const navbarSelectFunction = (i) => {
            setActiveIndices([...activeIndices, i]);
            setMainContent(contentSetter(i));
            setAnimationSwitch(!animationSwitch);
        }

        const onMouseEnter = i => {
            navbarSelectFunction(i);
        };

        const onMouseDown = i => {
            onMouseEnter(i);
        }

        const onMouseLeave = () => {
            setAnimationSwitch(!animationSwitch);
        }

        const onMouseUp = () => {
            setAnimationSwitch(!animationSwitch);
        }
        
        const contentSetter = (index) => {
            switch(index) {
                case 0: return (
                    <StyledMainContentContainer key={0} animation={animationSwitch}>
                        <ProductsDropdown />
                    </StyledMainContentContainer>
                )
                case 1: return (
                    <StyledMainContentContainer key={1} animation={animationSwitch}>
                        <DevelopersDropdown />
                    </StyledMainContentContainer>
                )
                case 2: return (
                    <StyledMainContentContainer key={2} animation={animationSwitch}>
                        <CompanyDropdown />
                    </StyledMainContentContainer>
                )
            }
        }

        return (
          <div>
            <StyledSectionHeader>
              About Me
            </StyledSectionHeader>
            <Navbar>
              {navbarConfig.map((n, index) => {
                return (
                  <NavbarItem
                    title={n.title}
                    key={index}
                    index={index}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                  >
                    {   //Logical Operator Short Circuiting, returns Component after 1st pass
                        currentIndex === index && (
                        <StyledNavigatorCaret />
                        )
                    }
                  </NavbarItem>
                );
              })}
            </Navbar>
            {mainContent}
          </div>
        );
    }

    // Main
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryLight} height='100vh'>
            <AboutMainComponent />
        </StyledSectionComponent>
    )
}