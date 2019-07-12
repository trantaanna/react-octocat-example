import React, { Component } from 'react'
import start from '../assets/start.png'
import gitFork from '../assets/git_fork.png'
import license from '../assets/legal.png'

export default class RepoDetails extends Component {
  //function to compute #days
  render() {

    return (
      <div className="repo-detail-outter">
      <div className="repo-detail">
        <h5><a href={this.props.repo.url} >{this.props.repo.name}</a></h5>
        <p>{this.props.repo.description}</p>
        <div className="repo-detail-status">
          { this.props.repo.langauge !== null &&
            <div className="icon-group">{this.props.repo.language}</div>
          }
          <div className="icon-group"><img src={start} alt="start" style={{width: 20, height: 20, margin:5}}/>{this.props.repo.stargazers_count}</div>          
          <div className="icon-group"><img src={gitFork} alt="Git Fork" style={{width: 20, height: 20, margin:5}}/>{this.props.repo.forks_count}</div>  
          { this.props.repo.license !== null &&  
          <div className="icon-group"><img src={license} alt="Legal" style={{width: 20, height: 20, margin:5}}/>{this.props.repo.license.name}</div>
          }
          <div className="icon-group">Updated {this.props.repo.updated_at}</div>
        </div>
      </div>
        <div className="start-btn-group">
          <button ><img src={start} alt="start" style={{width: 15, height: 15, margin:5}}/>Start</button>
          <hr style={{width: "100%", borderTop: "2px solid lightgreen"}}></hr>
        </div>
      </div>
    )
  }
}
