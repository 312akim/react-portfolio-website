import styled, {keyframes} from 'styled-components';

//Animations
const SkillsRingAnimation = keyframes`
    0% {
        transform: rotateX(-100deg) rotate(0);
    }

    100% {
        transform: rotateX(-100deg) rotate(-360deg);
    }
`


//Components
export const SkillsMainComponentContainer = styled.div`
    color: black;
    min-height: 30vh;
    width: 100%;
`

//Skills Ring
export const SkillsRingContainer = styled.div`

`

export const SkillsRingList = styled.ul`
    margin: 0;
    list-style: none;
    font-size: 4vw;
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