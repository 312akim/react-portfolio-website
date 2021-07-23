import React, { useEffect, useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCommitWrapper, StyledCommitTitle, StyledCommitDataWrapper, StyledCommitListContainer, StyledCommitDate, StyledCommitDataContainer, StyledCommitComment, StyledCommitGitAnchor, StyledCommitListWrapper, StyledActivitySectionContainer, StyledCommitTitleAnchor } from './ActivityComponentStyles';
import { Octokit } from "@octokit/core";
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
  const [apparelStoreCommits, setApparelStoreCommits] = useState({});
  const [portfolioCommits, setPortfolioCommits] = useState({});

  
  useEffect(() => {
    const octokit = new Octokit({ 
      auth: process.env.GIT_TOKEN 
    });
    
    const owner = '312akim',
          repo1 = 'apparel-store-mern',
          repo2 = 'react-portfolio-website',
          perPage = 5;
    
    const fetchApparelStoreData = async () => {
        const mostRecentApparelCommits = await octokit.request(
            `GET /repos/{owner}/{repo1}/commits`, { owner, repo1, per_page: perPage }
        );

        setApparelStoreCommits(mostRecentApparelCommits);
    }

    const fetchPortfolioCommits = async () => {
        const mostRecentPortfolioCommits = await octokit.request(
            `GET /repos/{owner}/{repo2}/commits`, { owner, repo2, per_page: perPage }
        );

        setPortfolioCommits(mostRecentPortfolioCommits);
    }

    fetchApparelStoreData();
    fetchPortfolioCommits();
  }, [])
    
    const commitConfig = [
      { title: "Portfolio Site Commits", api: portfolioCommits, link: 'https://github.com/312akim/react-portfolio-website' },
      { title: "Apparel Store Commits", api: apparelStoreCommits, link: 'https://github.com/312akim/apparel-store-mern' },
    ];

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
          {!props.api.data ? <div>Failed to load github commit data</div> :
            props.api.data.map((commit: any) => (
              <StyledCommitDataContainer key={uuidv4()}>
                <StyledCommitDate>
                  Date: {new Date(commit.commit.author.date).toLocaleDateString()}&nbsp;
                </StyledCommitDate>
                <StyledCommitGitAnchor href={commit.html_url} target="_blank">
                  Github
                  </StyledCommitGitAnchor>
                <StyledCommitComment>
                  Comment: {commit.commit.message}
                </StyledCommitComment>
              </StyledCommitDataContainer>
          )!)}
        </StyledCommitDataWrapper>
    </StyledCommitWrapper>
  )
}