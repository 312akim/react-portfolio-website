import styled from 'styled-components';

export const StyledReactScrollLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 500;
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '4vh'};
    transition: padding-right 1s;

    :hover {
        padding-right: 10px;
    }
`

export const StyledReactScrollIconLinkWrapper = styled.div`
    
`

export const StyledReactScrollIconLinkContainer = styled.div`
    cursor: pointer;
    margin-bottom: 4vh;
    transition: padding-right 1s;
    margin-left: 0%;

    :hover {
        padding-right: 10px;
    }
`

export const StyledAnimatedUnderline = styled.div`
    display: ${({underline}) => underline ? 'auto' : 'none'};
    position: absolute;
    width: 0;
    padding-bottom: 2px;
    right: 5vw;
    background: white;
    height: 0.5vh;
    z-index: -1;
    transition: width 0.5s;
    border-bottom: black 4px solid;
`

export const StyledIconTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

export const StyledReactScrollLinkWrapper = styled.div`
    margin-right: 5vw;
    &: hover ${StyledAnimatedUnderline} {
        width: 90px;
    }
`

//ReactScrollHomeLink
export const StyledHomeLinkContainer = styled.div`
    width: 100%;
    cursor: pointer;
`

export const StyledHomeLinkIconTextContainer = styled.div`

`