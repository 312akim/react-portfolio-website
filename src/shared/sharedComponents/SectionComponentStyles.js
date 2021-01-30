import styles from 'styled-components';

export const StyledSectionComponent = styles.div`
    height: 100vh;
    background: ${props => props.backgroundColor};
`