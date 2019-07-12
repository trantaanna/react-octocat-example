import React, { Component } from 'react';

export default class FilterForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectType = this.handleSelectType.bind(this);    
    this.handleSelectLanguage = this.handleSelectLanguage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("submitting")
  }

  handleChange(e){
    this.props.onChange(e.target.value);
  }

  handleSelectType(e){    
    this.props.onSelectType(e.target.value);
  }

  handleSelectLanguage(e){    
    console.log(e.target.value);
    this.props.onSelectLanguage(e.target.value);
  }

  render() {
    return (
      <div >

      <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="filter-input">
          <input type="text" onChange={this.handleChange} value={this.props.filterByName} placeholder="Find a repositor..."></input>
          <p>{this.props.filterByName}</p>
        </div>
        <div >
          <select  style={{width: "100px"}} name="selectType" onChange={this.handleSelectType} >
            <option value="" disabled selected>Type:</option>
            {this.props.type.map( (type, i) => { 
                return (<option  key={i} value={type} selected={this.props.selectedType === type}>{type}</option>);
            })}
          </select>
          <p>{this.props.selectedType}</p>
        </div>
        <div >
          <select style={{width: "120px"}} name="selectLanguage" onChange={this.handleSelectLanguage}>
            <option value="" disabled selected>Language:</option>
            {this.props.language.map( (language, i) => { 
                return (<option key={i} value={language} selected ={this.props.selectedLanguage === language}>{language}</option>);
            })}
          </select>          
     
          <p>{this.props.selectedLanguage}</p>
        </div>
      </form>
      </div>
    );
  }
}
