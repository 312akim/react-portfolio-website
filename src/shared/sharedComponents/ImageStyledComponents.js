import styled from 'styled-components';

export const StyledImageCropContainer = styled.div`
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : 'auto%'};
    position: ${({position}) => position? position : 'relative'};
    overflow: hidden;
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '4px'};

    @media (min-width: 768px) {
        width: ${({largeWidth}) => largeWidth};
        height: ${({largeHeight}) => largeHeight};
        border-radius: ${({largeBorderRadius}) => largeBorderRadius ? largeBorderRadius : '4px'};
    }
`