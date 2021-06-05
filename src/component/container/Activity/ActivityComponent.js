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
          // **********
          // Show 3 commits if smaller vertical sized screen
          // perPage = window.document.body.offsetHeight < 4300 ? 3 : 4;
          // **********
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
          console.log("returned");
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

// const TimedCloud = () => {
//   const [cloudState, setCloudState] = useState(<div></div>);

//   const scrollTop = window.innerHeight * 3;
//   useEffect(() => {
//       const onScroll = () => {
//           let currentPosition = window.pageYOffset;
//           console.log("Current position: " + currentPosition);

//           if (currentPosition > scrollTop) {
//               setCloudState(<CloudComponent />);
//           } else {
//               setCloudState(<div></div>);
//           }
//       }
//       window.addEventListener("scroll", onScroll);
//       return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//       <div>
//           {cloudState}
//       </div>
//   )
// }

// const CloudComponent = () => {
//   return (
//     <StyledCloudWrapper>
//       <StyledCloudImg src={cloudSvg} alt="" />
//       <StyledCloudContainer>This section utilizes Github's Octokit API to pull my latest commits</StyledCloudContainer>
//     </StyledCloudWrapper>
//   )
// }