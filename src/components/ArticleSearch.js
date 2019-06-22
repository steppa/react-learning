import React, {Fragment} from 'react';
import Header from './Header';
import ArticleList from './ArticleList';
import Input from "./UI/Input";
import Spinner from "./UI/Spinner/Spinner";

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

  handleSearchTextChange(e, props) {

    this.setState({searchText: e.target.value});

  }

  handleSubmit(e){
    //this.setState({searchText: this.props.searchText});
    e.preventDefault();
    this.callApi();
  }

  componentDidMount(){
    // this.callApi()
  }



  callApi() {
    this.setState({isLoading: true});
    //TODO: @shousden Change to Axios as that appears to be popular and more simple.
    fetch("https://content.guardianapis.com/search?q="+this.state.searchText+"&from-date=2019-01-01&api-key=bf18382d-5a0b-44cc-9713-4dd5a9d082b4")
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
        <h2>Search the Guardian</h2>
        <p>Use this form to search all Guardian and Observer articles produced in 2019</p>
        <form onSubmit={this.handleSubmit}>
          <Fragment id='searchbar'>
            <Input type={'text'}
                   title= {'Search for Articles: '}
                   name= {'search'}
                   value={this.state.searchText}
                   placeholder = {'Enter a search'}
                   handleChange = {this.handleSearchTextChange}
            />
            <Input type={'submit'}
                   value="Submit"
            />
          </Fragment>
        </form>
        <ArticleList articles={this.state.articles}/>
      </div>

    );
  }

}

export default ArticleSearch;


