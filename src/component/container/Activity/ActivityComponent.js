import React, { useEffect, useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
import { StyledCommitWrapper, StyledCommitTitle, StyledCommitDataWrapper, StyledCommitDate, StyledCommitGitLink, StyledCommitDataContainer, StyledCommitComment, StyledCommitGitAnchor } from './ActivityComponentStyles';
import { Octokit } from "@octokit/core";

export const ActivityComponent = () => {
    return (
        <StyledSectionComponent backgroundColor={COLORS.primaryDark}>
            <StyledSectionHeader>
                Recent Activity
            </StyledSectionHeader>
            <div>
                <CommitListComponent />
            </div>
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
    

    const fetchApparelStoreData = async () => {
        const fiveMostRecentApparelCommits = await octokit.request(
            `GET /repos/{owner}/{repo1}/commits`, { owner, repo1, per_page: perPage }
        );

        setApparelStoreCommits(fiveMostRecentApparelCommits);
    }

    const fetchPortfolioCommits = async () => {
        const fiveMostRecentPortfolioCommits = await octokit.request(
            `GET /repos/{owner}/{repo2}/commits`, { owner, repo2, per_page: perPage }
        );

        setPortfolioCommits(fiveMostRecentPortfolioCommits);
    }

    fetchApparelStoreData();
    fetchPortfolioCommits();
    }, [])

    const commitConfig = [
      { title: "Apparel Store Commits", api: apparelStoreCommits },
      { title: "Portfolio Site Commits", api: portfolioCommits }
    ];

    return (
      <div>
        {commitConfig.map((n, index) => {
          console.log("returned");
          return (
            <div key={index}>
              {CommitComponent(n)}
            </div>
            )
        })}
      </div>
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
                  Date: {new Date(commit.commit.author.date).toLocaleDateString()}
                </StyledCommitDate>
                <StyledCommitComment>
                  {commit.commit.message}
                </StyledCommitComment>
                <StyledCommitGitLink> 
                  See on:&nbsp;
                  <StyledCommitGitAnchor href={commit.html_url}>
                  Github
                  </StyledCommitGitAnchor>
                </StyledCommitGitLink>
              </StyledCommitDataContainer>
          ))}
        </StyledCommitDataWrapper>
    </StyledCommitWrapper>
  )
}