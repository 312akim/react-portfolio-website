import COLORS from '../../../shared/design/colorTheme';
import styles, {keyframes} from 'styled-components';


    // Animations
const cubeAnimation = keyframes`
    0% {

    }
    100% {

    }
`


    // Components
// 12vh/100
export const StyledAboutHero = styles.img`
    width: 80%;
    height: auto;
`

// margin-bot 9vh total
export const StyledAboutCubeTextContainer = styles.div`
    height: ${props => props.height};
    margin-bottom: 3vh;
`

//Scene
export const StyledCubeContainer = styles.div`
    width: 100%;
    height: 60vh;
    perspective: 10000px;
    margin-left: 20%;
    margin-top: 30%;
`
//Cube
export const StyledCube = styles.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transform: rotateX(45deg) rotateY(45deg);
`

export const StyledCubeFace = styles.div`
    position: absolute;
    width: 30vw;
    height: 30vw;
    opacity: 0.5;
    transform: ${props => props.transform} translateZ(15vw);
    background: ${props => props.backgroundColor};
`