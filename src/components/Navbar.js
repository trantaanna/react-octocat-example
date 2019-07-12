import React, { Component } from 'react';
import axios from 'axios';
import ReposView from './ReposView'
import SummaryView from './SummaryView'
import '../style/Navbar.css'

export default class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      repos: [],
      displayRepo: false
    }

    //this.toggleDisplay = this.toggleDisplay.bind(this)
  }
  componentDidMount(){
    //fetch data
    axios
    .get('https://api.github.com/users/octocat/repos')
    .then( res => {
      //console.log(res.data);
      this.setState( 
        { 
          repos: res.data
        }
        )
      })
    .catch( (error) => console.log(error) )
    
    //console.log("mount navbar");
  }


  render() {
    const myRepos = [...this.state.repos];
    const size = 6;
    const repos = 
      myRepos.sort( (a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, size);
    //console.log(this.state.repos);
    return (      
      <div>
        <div className="tab">
          <button name="sum-view" class="tablinks" onClick={ () => {this.setState( {displayRepo: false} ) } }>Overview</button>
          <button name="repo" class="tablinks" onClick={ () => {this.setState( {displayRepo: true} ) } }>Repositories ({this.state.repos.length})</button>
        </div>

        <div className="tab-content">
          {
            this.state.displayRepo ? <ReposView repos={this.state.repos}/> : <SummaryView repos={repos}/>
          }
        </div>
      </div>
    );
  }
}
