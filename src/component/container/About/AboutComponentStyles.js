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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 343px;

    @media (min-width: 768px) {
      width: 688px;
    }
`

export const StyledNavigatorContentContainer = styled.div`

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
    margin-top: 50px;

    @media (min-width: 768px) {
      margin-top: 100px;
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

  z-index: 1;
  display: ${flexColumnCentered};
`

// Dropdown Content Container
export const StyledDropdownContainer = styled.div`
  width: 343px;
  padding: 0 5%;
  margin-top: 3vh;
  min-height: 64vh;

  @media (min-width: 768px) {
    min-height: 55vh;
    width: 688px;
    padding: 5% 15%;
  }

  @media (min-width: 1024px) {
    min-height: 45vh;
    padding: 5% 15%;
  }

  @media (min-width: 1200px) {
    min-height: 60vh;
    padding: 5% 15%;
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
  height: 100px;
  width: 100px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`

export const StyledNavigatorItemTitle = styled.div`
  background: transparent;
  height: 100px;
  width: 100px;
  overflow-wrap: break-word;
  margin-bottom: 0;
  margin-right: 0;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 15px 10px 0 10px;
  text-align: center;
  color: ${({theme}) => theme.primaryLight};
  font-family: inherit;
  cursor: pointer;
  position: relative;
  z-index: 3;

  @media (min-width: 768px) {
    padding: 60px 30px 0 30px;
    height: 200px;
    width: 200px;
  }
`

    //Ensures onMouseLeave triggers for NavigatorItemContainer
export const StyledNavigatorContainer = styled.div`
  margin-left: 0rem;
  width: 70%;
  margin-top: 2vh;
`

export const StyledNavigatorItemContainer = styled.li`
  ${flexColumnCentered};
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
export const StyledNavigatorList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`

//AboutMoreComponent
export const StyledAboutMoreContainer = styled.section`

`

export const StyledAboutMoreContentWrapper = styled.div`
  ${flexColumnCentered};
  margin-bottom: 6vh;
  width: 320px;

  @media (min-width: 768px) {
    width: 688px;
  }
`

export const StyledAboutMoreContentContainer = styled.div`
  ${flexColumnCentered};
  margin-bottom: 2vh;
  border-radius: 4px;
  width: 320px;
  background: ${({theme}) => theme.primaryDark};
  box-shadow: 4px 4px 4px black;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 280px;
    width: 688px;
  }


`

export const StyledAboutMoreContentImage = styled.img`
  width: 320px;
  height: 320px;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`

export const StyledAboutMoreContentTextContainer = styled.div`
  width: 250px;
  padding: 5% 0;
  text-align: left;

  @media (min-width: 768px) {
    width: 340px;
    margin: 0 5%;
    padding: 2% 0;
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
  padding: 3% 0 3% 5%;
  background: ${({theme}) => theme.primaryLight};

  @media (min-width: 612px) {
    font-size: 1.4rem;
  }
`