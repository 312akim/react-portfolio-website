import React from 'react';
import { StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { SkillsMainComponentContainer, SkillsRingList, SkillsRingListItem, SkillsRingListItemTitle, SkillsRingListItemContent } from './SkillsComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export const SkillsComponent = () => {
    return (
        <div>
            <SkillsMainComponent />
        </div>
    )
}

const SkillsMainComponent = () => {
    return (
        <SkillsMainComponentContainer>
            <StyledSectionHeader>
                Skills
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
            title: 'NodeJS',
            icon: faNodeJs
        }, 
        {
            title: 'Github',
            icon: faGithubSquare
        }, 
        {
            title: 'Title4',
            icon: faReact
        }
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