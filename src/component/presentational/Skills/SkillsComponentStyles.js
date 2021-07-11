import styled, {keyframes} from 'styled-components';
import { flexColumnCentered } from '../../../shared/sharedComponents/SharedStyledComponentStyles';

//Animations
const SkillsRingAnimation = keyframes`
    0% {
        transform: rotateX(-115deg) rotate(0);
    }

    100% {
        transform: rotateX(-115deg) rotate(-360deg);
    }
`


//Components
export const SkillsMainComponentContainer = styled.div`
    ${flexColumnCentered};
    color: black;
    height: 60vh;
    margin-bottom: 5vh;

    @media (min-width: 768px) {
        height: 60vh;
    }
`

//Skills Ring
export const SkillsRingContainer = styled.div`

`

export const SkillsRingList = styled.ul`
    margin: 0;
    list-style: none;
    font-size: 2rem;
    transform-style: preserve-3d;
    animation: ${SkillsRingAnimation} 8s linear infinite;
`

export const SkillsRingListItem = styled.li`
    position: absolute;
    top: 50%;
    left: 50%;
`

export const SkillsRingListItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%) rotate(${({index, degree}) => index * degree}deg) translateY(-260px) rotateX(90deg);
`

export const SkillsRingListItemTitle = styled.div`

`