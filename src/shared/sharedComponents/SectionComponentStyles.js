import styles from 'styled-components';

export const StyledSectionComponent = styles.div`
    height: 100vh;
    background-color: ${props => props.backgroundColor};
    text-align: center;
    
    @media (min-width: 1200px) {
        padding: 0 15%;
    }
`

export const StyledSectionHeader = styles.h1`
    height: 10vh;
    margin: 0;
    padding-top: 4vh;
`

export const StyledSectionSubheader = styles.h2`
    height: 4vh;
    margin: 0;
    padding-top: 2vh;
`

export const StyledSectionText = styles.p`
    font-size: 1.2rem;
    width: 70%;
    margin-left: 15%;
    text-align: left;
`