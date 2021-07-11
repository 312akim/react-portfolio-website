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
    width: 100%;
`

export const StyledNavigatorContentContainer = styled.div`
  width: 86%;

  @media (min-width: 480px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 55%;
  }

  @media (min-width: 1200px) {
    width: 35%;
  }

  @media (min-width: 1920px) {
    width: 30%;
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
    min-height: 7vh;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 2vh;
    padding-top: 2vh;
    margin-bottom: 2vh;
    color: ${({theme}) => theme.primaryDark};
    z-index: 1;
`

export const StyledDropdownHeader = styled.h2(headingStyles);

export const StyledDropdownContent = styled.div`
    height: 100%;
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
  min-height: 60vh;

  @media (min-width: 480px) {
    min-height: 54vh;
  }

  @media (min-width: 768px) {
    min-height: 46vh;
  }

  @media (min-width: 1024px) {
    min-height: 46vh;
  }
`

//Main Content
export const StyledMainContentContainer = styled(animated.div)`
  margin-top: 8vh;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
`