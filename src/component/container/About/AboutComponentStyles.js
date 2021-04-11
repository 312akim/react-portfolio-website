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

export const headingStyles = css`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 0rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
    color: ${COLORS.primaryDark};
`

export const StyledDropdownHeader = styled.h3(headingStyles);

export const StyledDropdownContent = styled.div`

`

export const StyledDropdownSection = styled.div`
  position: relative;
  z-index: 1;
`

export const StyledDropdownContainer = styled.div`
  width: 100%;
  margin-top: 15%;
`

//Main Content
export const StyledMainContentContainer = styled(animated.div)`
  width: 60%;
  height: 70vh;
  background: gray;
  padding-left: 20%;
  padding-right: 20%;
  animation: ${props => caretAnimation(props.animation)} 1s linear;
`

//Navigator Item
export const StyledDropdownImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 20vw;
    height: 17vh;
    overflow: hidden;
`

export const StyledNavigatorItemTitle = styled.div`
  background: transparent;
  width: 20vw;
  margin-bottom: 50%;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding-top: 2rem;
  text-align: center;
  color: ${COLORS.primaryLight};
  font-family: inherit;
  cursor: pointer;
  position: relative;
  z-index: 2;
`

    //Ensures onMouseLeave triggers for NavigatorItemContainer
export const StyledNavigatorContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`

export const StyledNavigatorItemContainer = styled.li`
  position: relative;
  width: 20vw;
  img {
    filter: brightness(40%);
  }
  :hover img {
    filter: brightness(100%);
  }

`

export const StyledDropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  perspective: 1000px;
`

//Navigator
export const StyledNavigatorListContainer = styled.nav`
  margin: 0 auto;
`

export const StyledNavigatorList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  list-style: none;
  margin: 0 10% 0 10%;
`

//App Container
export const StyledAppContainer = styled.div`
  background: white;
  margin-top: 10vh;
  margin-bottom: 10vh;
  min-height: 80vh;
`