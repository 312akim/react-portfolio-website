import styled from 'styled-components';
import { flexColumnCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';

export const StyledMainContainer = styled.div`
    background: ${({theme}) => theme.primaryLight};
    ${flexColumnCentered};
`