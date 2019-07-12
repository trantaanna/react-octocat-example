import React, { Component } from 'react';
import axios from 'axios';
import location from '../assets/location.png'
import '../style/Profile.css'

export default class Profile extends Component {
  constructor(){
    super();
    this.state = {
      profile: {}
    }
  }

  componentDidMount(){
    //fetch data
    axios
    .get('https://api.github.com/users/octocat')
    .then( res => {
      //console.log(res.data.login);
      this.setState( 
        {profile: res.data}
        )
      })
    .catch( (error) => console.log(error) )
  }
  render() {
    //console.log(this.state.profile);
    return (
      <div>
        <img className="avatar" style={{height: 200}} src={this.state.profile.avatar_url} alt="avatar" />
        <h1>{this.state.profile.name}</h1>
        <h2>{this.state.profile.login}</h2>
        <p><img src={location} alt="location" style={{width: 20, height: 20, margin:5}}/>{this.state.profile.location}</p>

      </div>
    )
  }
}
