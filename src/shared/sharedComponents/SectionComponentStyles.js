import styles from 'styled-components';

export const StyledSectionComponent = styles.div`
    height: 100vh;
    background-color: ${props => props.backgroundColor};
`