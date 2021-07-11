import React, { useEffect, useState } from 'react';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCommitWrapper, StyledCommitTitle, StyledCommitDataWrapper, StyledCommitListContainer, StyledCommitDate, StyledCommitGitLink, StyledCommitDataContainer, StyledCommitComment, StyledCommitGitAnchor, StyledCommitListWrapper, StyledActivitySectionContainer } from './ActivityComponentStyles';
import { Octokit } from "@octokit/core";

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
  const [apparelStoreCommits, setApparelStoreCommits] = useState(false);
  const [portfolioCommits, setPortfolioCommits] = useState(false);

  const octokit = new Octokit({ 
    auth: process.env.GIT_TOKEN 
  });

  useEffect(() => {
    const owner = '312akim',
          repo1 = 'apparel-store-mern',
          repo2 = 'react-portfolio-website',
          perPage = 5;
    
    console.log("Height: " + window.document.body.offsetHeight);
    const fetchApparelStoreData = async () => {
        const fourMostRecentApparelCommits = await octokit.request(
            `GET /repos/{owner}/{repo1}/commits`, { owner, repo1, per_page: perPage }
        );

        setApparelStoreCommits(fourMostRecentApparelCommits);
    }

    const fetchPortfolioCommits = async () => {
        const fourMostRecentPortfolioCommits = await octokit.request(
            `GET /repos/{owner}/{repo2}/commits`, { owner, repo2, per_page: perPage }
        );

        setPortfolioCommits(fourMostRecentPortfolioCommits);
    }

    fetchApparelStoreData();
    fetchPortfolioCommits();
    }, [])

    const commitConfig = [
      { title: "Apparel Store Commits", api: apparelStoreCommits },
      { title: "Portfolio Site Commits", api: portfolioCommits }
    ];

    return (
      <StyledCommitListWrapper>
        {commitConfig.map((n, index) => {
          return (
            <div key={index}>
              {CommitComponent(n)}
            </div>
            )
        })}
      </StyledCommitListWrapper>
    );
}

const CommitComponent = (props) => {
  return (
    <StyledCommitWrapper>
        <StyledCommitTitle>{props.title}</StyledCommitTitle>
        <StyledCommitDataWrapper>
          {!props.api ? <div>Failed to load github commit data</div> :
            props.api.data.map(commit => (
              <StyledCommitDataContainer key={commit.id}>
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
          ))}
        </StyledCommitDataWrapper>
    </StyledCommitWrapper>
  )
}