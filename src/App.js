import React from 'react';
import './App.css';
import Header from './components/Header';
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

  }
   componentDidUpdate() {
     console.log("update");
  }


  render()
    {
      return (

        <div id='guardianArticleList'>
          <Header/>
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

  callApi(){
    //TODO: @shousden Change to Axios as that appears to be popular and more simple.
    fetch("https://content.guardianapis.com/search?q="+this.props.searchText+"&from-date=2019-01-01&api-key=bf18382d-5a0b-44cc-9713-4dd5a9d082b4")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("State setting");

          this.setState({
            isLoaded: true,
            articles: result.response.results
          });
          console.dir(this.state);
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

  handleSubmit(event) {
    event.preventDefault();
    this.setState({searchText: this.props.searchText});
    this.callApi();


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
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("this update");
  }

  render(){
    const items = this.props.articles;
    return(
      <ul>
        {items.map(item => (
          <li key={item.webUrl}>
            <a href={item.webUrl}>{item.webTitle}</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default GuardianArticleList;


