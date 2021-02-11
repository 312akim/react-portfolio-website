import styles from 'styled-components';

export const StyledSectionContainer = styles.div`
    text-align: center;
`

export const StyledModalContainer = styles.div`

`

export const StyledSectionHeader = styles.h1`
    height: 10vh;
    margin: 0;
`

export const StyledProjectCard = styles.div`
    position: relative;
    width: 70%;
    height: 37vh;
    margin: 0 auto 2vh auto;
    border: 1px solid black;
`

export const StyledProjectCardTitle = styles.h2`
    position: block;
    width: 60vw;
    
    margin: 0 0 2vh 5vw;
`

export const StyledProjectCardImage = styles.img`
    width: 100%;
    height: auto;

    @media (min-width: 576px) {
        height: 100%;
        width: auto;
    }
`

export const StyledCardHover = styles.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;

    :hover {
        opacity: 0.8;
        background: black;
    }
`

export const StyledProjectInformation = styles.div`
    height: 20%;
    opacity: 1;
    color: white;
`

export const StyledReadMore = styles.button`
    height: 10%;
    margin-top: 15%;
    margin-bottom: 15%;
`

export const StyledGithubLink = styles.div`
    height: 10%;
    margin-bottom: 2vh;
    color: white;
`

export const StyledModalHero = styles.div`

`

export const StyledModalHeroTitle = styles.div`

`

export const StyledModalText = styles.div`

`

export const StyledModalSubHeader = styles.div`

`

export const StyledMoalSubText = styles.div`

`