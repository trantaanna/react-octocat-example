import React, { Component } from 'react'
import '../style/ReposView.css'
import FilterForm from './FilterForm'
import RepoDetails from './RepoDetails';

export default class ReposView extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterByName: "",
      type: ["All", "Private", "Public", "Sources", "Forks", "Archive", "Mirrors"],
      selectedType: "",
      language: ["All", "JavaScript", "Python", "HTML", "CSS", "Ruby"],
      selectedLanguage: "",
      filteredRepos: this.props.repos
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectType = this.handleSelectType.bind(this);    
    this.handleSelectLanguage = this.handleSelectLanguage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(filter){
    this.setState( {filterByName: filter} );
    let filteredRepos = [];
    if (filter !== ""){
      filteredRepos = [...this.props.repos].filter( repo => repo.name.includes(filter));
      this.setState({filteredRepos: filteredRepos});
    }
    else {
      this.setState({filteredRepos: this.props.repos});
    }
  }

  handleChange(filter){
    this.setState( {filterByName: filter} );
    let filteredRepos = [];
    if (filter !== ""){
      filteredRepos = [...this.props.repos].filter( repo => repo.name.includes(filter)  );   
      this.setState({filteredRepos: filteredRepos});
    }
    else {
      this.setState({filteredRepos: this.props.repos});
    }
  }

  handleSelectType(type){
    this.setState({selectedType: type});
    let filteredRepos = [];
    switch(type){
      case "Private":
        filteredRepos = [...this.props.repos].filter( repo => repo.private === true  );
        this.setState({filteredRepos: filteredRepos});
        break;   
      case "Public":
        filteredRepos = [...this.props.repos].filter( repo => repo.private === false  );
        this.setState({filteredRepos: filteredRepos});
        break;
      case "Forks":
        filteredRepos = [...this.props.repos].filter( repo => repo.fork === true  );
        this.setState({filteredRepos: filteredRepos});
      case "Sources":
        break;
      case "Archive":
          filteredRepos = [...this.props.repos].filter( repo => repo.archived === true  );
          this.setState({filteredRepos: filteredRepos});
        break;
      case "Mirror":
          filteredRepos = [...this.props.repos].filter( repo => repo.mirror_url !== null  );
          this.setState({filteredRepos: filteredRepos});
        break;
      default:
        this.setState({filteredRepos: this.props.repos});
        break;
    }

  }

  handleSelectLanguage(language){
    this.setState({selectedLanguage: language});    
    let filteredRepos = [];
    if (language !== "") {   
      if (language !== "All") {
        filteredRepos = [...this.props.repos].filter( repo => repo.language !== null && repo.language.includes(language));
        console.log("here");
        this.setState({filteredRepos: filteredRepos});
      }
      else if(language === "All"{
        this.setState({filteredRepos: this.props.repos});
      }
    }
    else {
      this.setState({filteredRepos: this.props.repos});
    }
  
  }

  componentWillMount(){
    // this.setState({filterRepos: this.props.repos})
  }
  componentDidMount(){
    console.log("mounted")    
  }

  componentDidUpdate(){    
    // console.log(this.state.filter);
    // console.log(this.state.selectedType);
    // console.log(this.state.selectedLanguage);
    console.log("updated");
    console.log(this.props.repos);
  }
  render() {
  //apply filter
  //sort by latest update    
    const reposList = [...this.state.filteredRepos]
      .sort( (a, b) => b.updated_at - a.updated_at)
      .map ( (repo, index) =>(<div className="repo-details-container" key={index}> <RepoDetails repo={repo}/> </div>));
    console.log(reposList);
    return (
      <div className="view-container">
        <div>
          <FilterForm {...this.state}
            onChange={this.handleChange}
            onSelectType={this.handleSelectType}
            onSelectLanguage={this.handleSelectLanguage}/>
        </div>
        <div className="repos-view-container ">
            {reposList}

        </div>
      </div>
    )
  }
}
