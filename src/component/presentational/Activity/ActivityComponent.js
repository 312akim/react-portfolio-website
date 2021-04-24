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
  const [commits, setCommits] = useState(false);

  const octokit = new Octokit({ 
    auth: process.env.GIT_TOKEN 
  });

  useEffect(() => {
    const owner = '312akim',
          repo = 'apparel-store-mern',
          perPage = 5;
    

    const fetchData = async () => {
        const fiveMostRecentCommits = await octokit.request(
            `GET /repos/{owner}/{repo}/commits`, { owner, repo, per_page: perPage }
        );

        setCommits(fiveMostRecentCommits);
        console.log("Commits: " + JSON.stringify(commits));
    }

    fetchData();
    }, [])

    return (
      <>
        <ul>
          {!commits ? <div>failed to load data</div> :
            commits.data.map(commit => (
              <li key={commit.id}>
                  {commit.commit.author.name}: {commit.commit.message}
                  <a href={commit.html_url}> Link</a>
              </li>
          ))}
        </ul>
      </>
    );
}