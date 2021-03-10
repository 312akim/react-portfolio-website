import COLORS from '../../../shared/design/colorTheme';
import styles from 'styled-components';

// 12vh/100
export const StyledAboutHero = styles.img`
    width: 80%;
    height: auto;
`

// margin-bot 9vh total
export const StyledAboutSubsection = styles.div`
    height: ${props => props.height};
    margin-bottom: 3vh;
    background: yellow;
`