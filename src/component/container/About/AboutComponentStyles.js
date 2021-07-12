import styled, {css} from 'styled-components';
import { animated } from 'react-spring'
import { flexColumnCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';

    // Components

//App Container
export const StyledAppContainer = styled.div`
  ${flexColumnCentered};
  background: white;
`

export const StyledMainHeader = styled.div`
    display: inline-block;
    width: 30%;
`

export const StyledNavigatorWrapper = styled.div`
  ${flexColumnCentered};
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
  min-height: 64vh;

  @media (min-width: 480px) {
    min-height: 57vh;
  }

  @media (min-width: 768px) {
    min-height: 55vh;
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

//AboutMoreComponent
export const StyledAboutMoreContainer = styled.section`

`

export const StyledAboutMoreContentWrapper = styled.div`
  ${flexColumnCentered};
  margin-bottom: 6vh;
  width: 343px;

  @media (min-width: 768px) {
    width: 688px;
  }
`

export const StyledAboutMoreContentContainer = styled.div`
  ${flexColumnCentered};
  margin-bottom: 2vh;
  border: 1px solid black;
  border-radius: 4px;
  width: 90%;
  background: ${({theme}) => theme.primaryDark};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }


`

export const StyledAboutMoreContentImage = styled.img`
  width: 320px;
  height: 320px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export const StyledAboutMoreContentTextContainer = styled.div`
  width: 250px;
  padding: 5% 0;
  text-align: left;

  @media (min-width: 768px) {

    width: auto;
  }
`

export const StyledAboutMoreContentTitle = styled.div`
  border-bottom: 2px solid ${({theme}) => theme.primaryLight};
  font-weight: bold;
  font-size: 1.8rem;
  padding-bottom: 5px;
  width: 130px;
  color: ${({theme}) => theme.primaryLight};
`

export const StyledAboutMoreContentText = styled.div`

`

export const StyledAboutMoreContentTextLine = styled.div`
  font-size: 1.3rem;
  margin: 5% 0;
  padding-left: 5%;
  background: ${({theme}) => theme.primaryLight};

  @media (min-width: 612px) {
    font-size: 1.4rem;
  }
`