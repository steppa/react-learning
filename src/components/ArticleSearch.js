import React from 'react';
import ArticleList from './ArticleList';
import TextInput from "./UI/TextInput";
import BtnInput from "./UI/Btninput";

class ArticleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      error: null,
      isLoaded: false,
      articles: [],
      isLoading: false
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchTextChange(e) {

    this.setState({searchText: e.target.value});

  }

  handleSubmit(e){
    //this.setState({searchText: this.props.searchText});
    e.preventDefault();
    this.callApi();
  }

  callApi() {
    this.setState({isLoading: true});
    //TODO: @shousden Change to Axios as that appears to be popular and more simple.
    fetch("https://content.guardianapis.com/search?q="+this.state.searchText+"&from-date=2020-01-01&api-key=bf18382d-5a0b-44cc-9713-4dd5a9d082b4")
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

      <section id='guardianArticleList'>
        <h2>Search the Guardian</h2>
        <p>Use this form to search all Guardian and Observer articles produced in 2019</p>
        <form onSubmit={this.handleSubmit}>

            <TextInput type={'text'}
                       title= {'Search for Articles: '}
                       name= {'search'}
                       value={this.state.searchText}
                       placeholder = {'Enter a search'}
                       handleChange = {this.handleSearchTextChange}
            />
            <BtnInput type={'submit'}
                      value="Submit"
                      btnClass = {'btn btn-primary'}

            />
        </form>
        <ArticleList articles={this.state.articles}/>
      </section>

    );
  }

}

export default ArticleSearch;


