import COLORS from '../../../shared/design/colorTheme';
import styled, {keyframes, css} from 'styled-components';
import { animated } from 'react-spring'

    // Animations
const caretAnimation= (props) => keyframes`
    0% {
        ${props === true ? "opacity: 0" : "opacity: 1"};
    }

    100% {
        opacity: 1;
    }
`


    // Components
export const StyledMainHeaderContainer = styled.div`

`

export const StyledMainHeader = styled.div`
    display: inline-block;
    width: 30%;
`

//Dropdown Container
export const StyledNavigatorCaret = styled.div`
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent ${COLORS.primaryDark};
    top: -20px; 
    left: calc(50% - 10px);
    z-index: 1;
`

//Company Dropdown
export const headingStyles = css`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${COLORS.primaryLight};
`

export const StyledDropdownHeader = styled.h3(headingStyles);

export const StyledDropdownContent = styled.div`

`

export const StyledDropdownSection = styled.div`
  position: relative;
  z-index: 1;
`;

export const StyledDropdownContainer = styled.div`
  width: 25rem;
`;

//Main Content
export const StyledMainContentContainer = styled(animated.div)`
  width: 60%;
  height: 70vh;
  background: gray;
  padding-left: 20%;
  padding-right: 20%;
  animation: ${props => caretAnimation(props.animation)} 1s linear;
`

//Navbar Item
export const StyledNavigatorItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  color: ${COLORS.primaryDark};
  font-family: inherit;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  position: relative;
  z-index: 2;
  :hover,
  :focus {
    opacity: 0.7;
  }
`

    //Ensures onMouseLeave triggers for NavbarItemEl
export const StyledNavigatorContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`

export const StyledNavigatorItemContainer = styled.li`
  position: relative;
  margin-left: 0.5rem;

`

export const StyledDropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  perspective: 1000px;
`

//Navbar
export const StyledNavigatorListContainer = styled.nav`
  margin: 0 auto;
`

export const StyledNavigatorList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`

//App Container
export const StyledAppContainer = styled.div`
  background: white;
  margin-top: 10vh;
  margin-bottom: 10vh;
  border: 1px solid ${COLORS.primaryDark};
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;