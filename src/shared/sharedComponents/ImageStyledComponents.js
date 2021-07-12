import styled from 'styled-components';

export const StyledImageCropContainer = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 'auto%'};
    position: ${props => props.position? props.position : 'relative'};
    overflow: hidden;
    border-radius: 4px;

    @media (min-width: 768px) {
        width: ${props => props.largeWidth};
        height: ${props => props.largeHeight};
    }
`