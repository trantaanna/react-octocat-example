// import React, { Component } from 'react'
// import Repo from './Repo'
// import '../style/SummaryView.css'

// export default class SummaryView extends Component {
  
//   componentDidMount(){
//     console.log("inside summary");
//     console.log(this.props.repos);
//   }
//   render() {
//     // const myRepos = [...this.props.repos];
//     // const size = 6;
//     // const repos = 
//     //   myRepos.sort( (a, b) => b.stargazers_count - a.stargazers_count)
//     //   .slice(0, size)
//     //   .map ( (repo, index) =>(<div className="repo-container" key={index}> <Repo name={repo.name} url={repo.html_url} description=      {repo.description} start={repo.stargazers_count} gitFork={repo.forks_count} language={repo.language} /> </div>));
//     const reposList = [...this.props.repos]
//     const repos = reposList.map ( (repo, index) =>(<div className="repo-container" key={index}> <Repo name={repo.name} url={repo.html_url} description={repo.description} start={repo.stargazers_count} gitFork={repo.forks_count} language={repo.language} /> </div>));
//     return (
//       <div className="summary-container">
//         {repos}
//       </div>
//     )
//   }
// };

import React from 'react';
import Repo from './Repo'
import '../style/SummaryView.css'

export default function SummaryView(props) {
  const reposList = [...props.repos]
  const repos = reposList.map ( (repo, index) =>(<div className="repo-container" key={index}> <Repo name={repo.name} url={repo.html_url} description={repo.description} start={repo.stargazers_count} gitFork={repo.forks_count} language={repo.language} /> </div>));
  return (
    <div className="col">
      <div >      
        <h5>Popular repositories</h5>
      </div>
      <div className="summary-container">

          {repos}
      </div>
    </div>
  );
}
