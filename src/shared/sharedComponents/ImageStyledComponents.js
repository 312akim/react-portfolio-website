import styled from 'styled-components';

export const StyledImageCropContainer = styled.div`
    width: 100%;
    height: ${props => props.height};
    position: ${props => props.position? props.position : 'relative'};
    overflow: hidden;
    border-radius: 4px;

    @media (min-width: 1200px) {
        height: ${props => props.desktopHeight};
    }
`