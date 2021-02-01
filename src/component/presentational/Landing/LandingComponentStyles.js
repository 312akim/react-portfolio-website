import styles from 'styled-components';

export const NameContainer = styles.div`
    text-align: center;
    height: 20vh;
`

export const MainHeader = styles.h1`
    font-size: 64px;
    font-weight: 300;
    padding-right: 15%;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 96px;
    }
`

export const SubHeader = styles.h2`
    font-size: 36px;
    font-weight: 700;
    padding-left: 15%;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 54px;
    }
`

export const FlyingAnimationContainer = styles.div`
    height: 30vh;
`

export const TextContainer = styles.div`
    height: 50vh;
`

export const TextSection = styles.p`
    font-size: 24px;
    padding-left: 15%;
    padding-right: 10%;
    margin-bottom: 3vh;
    margin-top: 0;

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`