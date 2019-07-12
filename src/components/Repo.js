import React from 'react'
import '../style/Repo.css'
import start from '../assets/start.png'
import gitFork from '../assets/git_fork.png'

export default function Repo (props) {
    return (
      <div className="repo">
        <h5><a href={props.url} >{props.name}</a></h5>
        <p>{props.description}</p>
        <div className="status">
          <div>{props.language}</div>
          <div>
            <img src={start} alt="start" style={{width: 20, height: 20, margin:5}}/>{props.start}</div>          
          <div><img src={gitFork} alt="Git Fork" style={{width: 20, height: 20, margin:5}}/>{props.gitFork}</div>
        </div>
      </div>
    )
  }
