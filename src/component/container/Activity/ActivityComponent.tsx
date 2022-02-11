import React, { useEffect, useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCommitWrapper, StyledCommitTitle, StyledCommitDataWrapper, StyledCommitListContainer, StyledCommitDate, StyledCommitDataContainer, StyledCommitComment, StyledCommitGitAnchor, StyledCommitListWrapper, StyledActivitySectionContainer, StyledCommitTitleAnchor } from './ActivityComponentStyles';
import { Octokit } from "@octokit/core";
import { OctokitResponse } from "@octokit/types"
import { uuidv4 } from '../../../shared/sharedComponents/HelperUtil';

export const ActivityComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={({theme}) => theme.primaryDark} fontColor={({theme}) => theme.primaryLight}>
            <StyledActivitySectionContainer>
              <StyledSectionHeader>
                  Recent Activity
              </StyledSectionHeader>
              <StyledCommitListContainer>
                  <CommitListComponent />
              </StyledCommitListContainer>
            </StyledActivitySectionContainer>
        </StyledSectionComponent>
    )
}

//Github API Latest 5 commits to a repo
const CommitListComponent = () => {
  const [projectCommits, setProjectCommits] = useState<OctokitResponse<any, number>[]>([]);

  const perPage = 5;

  const commitConfig = [
    { githubTitle: '312akim/react-portfolio-website', title: "Portfolio Site Commits", api: projectCommits[0], link: 'https://github.com/312akim/react-portfolio-website' },
    { githubTitle: '312akim/ecommerce-react-component-lib', title: "Ecommerce React Component Library", api: projectCommits[1], link: 'https://github.com/312akim/ecommerce-react-component-lib' },
  ];
  
  useEffect(() => {
    const octokit = new Octokit({ 
      auth: process.env.GIT_TOKEN 
    });

    const fetchCommits = async (repo: string) => {
      const commits = await octokit.request(
        `GET /repos/${repo}/commits`, { repo, per_page: perPage }
      )
      return commits;
    }

    const commitsArray = commitConfig.map(obj => {
      return fetchCommits(obj.githubTitle)
    })

    Promise.all(commitsArray)
    .then(array => setProjectCommits(array));

  }, [])

  return (
    <StyledCommitListWrapper>
      {commitConfig.map(n => {
        return (
          <div key={uuidv4()}>
            {CommitComponent(n)}
          </div>
          )
      })}
    </StyledCommitListWrapper>
  );
}

interface CommitConfigInterface {
  githubTitle?: string,
  title: string,
  api: any,
  link: string
}

const CommitComponent = (props: CommitConfigInterface) => {
  return (
    <StyledCommitWrapper>
        <StyledCommitTitle>
          <StyledCommitTitleAnchor href={props.link} target='_blank'>
            {props.title}
          </StyledCommitTitleAnchor>
        </StyledCommitTitle>
        <StyledCommitDataWrapper>
          {!props.api?.data ? <div>Failed to load github commit data</div> :
            props.api.data.map((commit: any) => (
              <StyledCommitDataContainer key={uuidv4()}>
                <StyledCommitDate>
                  Date: {new Date(commit.commit.author.date).toLocaleDateString()}&nbsp;
                </StyledCommitDate>
                <StyledCommitGitAnchor href={commit.html_url} target="_blank">
                  Github
                  </StyledCommitGitAnchor>
                <StyledCommitComment>
                  Commit| {commit.commit.message}
                </StyledCommitComment>
              </StyledCommitDataContainer>
          )!)}
        </StyledCommitDataWrapper>
    </StyledCommitWrapper>
  )
}