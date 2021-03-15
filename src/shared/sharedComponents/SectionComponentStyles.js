import styles from 'styled-components';

export const StyledSectionComponent = styles.div`
    height: ${props => props.height ? props.height : '100vh'};
    background-color: ${props => props.backgroundColor};
    text-align: center;
    
    @media (min-width: 1200px) {
        padding: 0 15%;
    }
`

export const StyledSectionHeader = styles.h1`
    height: 8vh;
    margin: 0;
    padding-top: 4vh;
`

export const StyledSectionSubheader = styles.h2`
    height: 4vh;
    margin: 0;
`

export const StyledSectionText = styles.p`
    font-size: 1.2rem;
    width: 70%;
    margin-top: 1vh;
    margin-left: 15%;
    text-align: left;
`