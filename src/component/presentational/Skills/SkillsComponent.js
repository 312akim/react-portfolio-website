import React from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { SkillsMainComponentContainer, SkillsRingList, SkillsRingListItem, SkillsRingListItemTitle, SkillsRingListItemContent } from './SkillsComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faGithubSquare, faJs, faSass } from '@fortawesome/free-brands-svg-icons';

export const SkillsComponent = () => {
    return (
        <StyledSectionComponent minHeight={'35vh'}>
            <SkillsMainComponent />
        </StyledSectionComponent>
    )
}

const SkillsMainComponent = () => {
    return (
        <SkillsMainComponentContainer>
            <StyledSectionHeader>
                My Skills
            </StyledSectionHeader>
            <SkillsRing />
        </SkillsMainComponentContainer>
    )
}


const SkillsRing = () => {
    const skillsConfig = [
        {
            title: 'React',
            icon: faReact
        }, 
        {
            title: 'JavaScript',
            icon: faJs
        },
        {
            title: 'NodeJS',
            icon: faNodeJs
        }, 
        {
            title: 'Github',
            icon: faGithubSquare
        }, 
        {
            title: 'SCSS',
            icon: faSass
        },
        {
            title: 'MongoDB',
            icon: faDatabase
        },
    ];

    //Determines even spacing of items in ring
    const ringDegree = 360 / skillsConfig.length;

    return (
        <SkillsRingList>
            {
                skillsConfig.map((skill, index) => {
                    return (
                        <SkillsRingListItem>
                            <SkillsRingListItemContent index={index} degree={ringDegree}>
                                <FontAwesomeIcon icon={skill.icon} size="3x"/>
                                <SkillsRingListItemTitle>
                                    {skill.title}
                                </SkillsRingListItemTitle>
                            </SkillsRingListItemContent>
                        </SkillsRingListItem>
                    )
                })
            }
        </SkillsRingList>
    )
}