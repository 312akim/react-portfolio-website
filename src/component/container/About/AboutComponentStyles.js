import styled, {css} from 'styled-components';
import { animated } from 'react-spring'

    // Components

export const StyledMainHeader = styled.div`
    display: inline-block;
    width: 30%;
`

export const StyledNavigatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledNavigatorContentContainer = styled.div`
  width: 80%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const StyledNavigatorCaret = styled.div`
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent ${({theme}) => theme.secondaryLight};
    left: calc(50% - 10px);
    z-index: 1;
    margin-top: 3vh;

    @media (min-width: 1200px) {
      margin-top: 1vh;
    }
`

export const headingStyles = css`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
    color: ${({theme}) => theme.primaryDark};
    z-index: 1;
`

export const StyledDropdownHeader = styled.h3(headingStyles);

export const StyledDropdownContent = styled.div`
    overflow-y: hidden;
`

export const StyledDropdownTextLine = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  margin-bottom: 2vh;
  word-break: normal;
  overflow-wrap: normal;
`

export const StyledDropdownSection = styled.div`
  position: relative;
  z-index: 1;
`

// Dropdown Content Container
export const StyledDropdownContainer = styled.div`
  width: 100%;
  margin-top: 3vh;
`

//Main Content
export const StyledMainContentContainer = styled(animated.div)`
  height: 65vh;
  margin-top: 8vh;

  @media (min-width: 1200px) {
    margin-top: 11vh;
  }
`

//Navigator Item
export const StyledDropdownImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    min-height: 17vh;
    overflow: hidden;

    @media (min-width: 1200px) {
      margin-top: -2vh;
    }
`

export const StyledNavigatorItemTitle = styled.div`
  background: transparent;
  height: 14vh;
  width: 80%;
  overflow-wrap: break-word;
  margin-left: 10%;
  margin-bottom: 0;
  margin-right: 0;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding-top: 3vh;
  text-align: center;
  color: ${({theme}) => theme.primaryLight};
  font-family: inherit;
  cursor: pointer;
  position: relative;
  z-index: 3;
`

    //Ensures onMouseLeave triggers for NavigatorItemContainer
export const StyledNavigatorContainer = styled.div`
  margin-left: 0rem;
  width: 70%;
  margin-top: 5vh;
`

export const StyledNavigatorItemContainer = styled.li`
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  z-index: 2;

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
  margin: 0;
`

//App Container
export const StyledAppContainer = styled.div`
  background: white;
  margin-bottom: 10vh;
  min-height: 80vh;
`