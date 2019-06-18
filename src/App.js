import React from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

// Created as a class because we need to use the state.

class GuardianArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      error: null,
      isLoaded: false,
      articles: []
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit(event){


    console.log("API call here");
  }
  componentDidMount() {
    fetch("https://content.guardianapis.com/search?q=environment&from-date=2019-01-01&api-key=cb03ed79-27c2-417b-859e-08a5a3bd3285")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.response.results
          });
        },
        // Handle errors don't catch!
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render()
    {
      return (
        <div id='guardianArticleList'>
          <h1>Article List</h1>
          <SearchBar
          searchText = {this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
          onSubmit={this.handleSubmit}/>
          <ArticleList articles={this.state.articles}/>
        </div>
      );
    }

}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSearchBarChange(event) {
    this.props.onSearchTextChange(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.searchText);
    event.preventDefault();
  }
 render(){
   const searchText = this.props.searchText;
   return(
     <form onSubmit={this.handleSubmit}>
   <input type="text" value={this.props.searchText} onChange={this.handleSearchBarChange}/>
   <input type="submit" value="Submit"/>
     </form>
   );
 }
}

class ArticleList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const items = this.props.articles;
    return(
      <ul>
        {items.map(item => (
          <li key={item.sectionName}>
            <a href={item.webUrl}>{item.webTitle}</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default GuardianArticleList;


