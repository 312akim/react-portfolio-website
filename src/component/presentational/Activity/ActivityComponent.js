import React, { useEffect, useState } from 'react';
import COLORS from '../../../shared/design/colorTheme';
import { StyledSectionComponent, StyledSectionHeader } from '../../../shared/sharedComponents/SectionComponentStyles';
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

    return (
      <>
        <ul>
          <h2>Apparel Store Commits</h2>
          {!apparelStoreCommits ? <div>failed to load commit data</div> :
            apparelStoreCommits.data.map(commit => (
              <li key={commit.id}>
                  {new Date(commit.commit.author.date).toLocaleDateString()}: {commit.commit.message}
                  <a href={commit.html_url}> Link</a>
              </li>
          ))}
        </ul>
        <ul>
          <h2>Portfolio Site Commits</h2>
          {!portfolioCommits ? <div>failed to load commit data</div> :
            portfolioCommits.data.map(commit => (
              <li key={commit.id}>
                  {new Date(commit.commit.author.date).toLocaleDateString()}: {commit.commit.message}
                  <a href={commit.html_url}> Link</a>
              </li>
          ))}
        </ul>
      </>
    );
}