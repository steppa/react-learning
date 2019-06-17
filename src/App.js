import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom";

// Created as a class because we need to use the state.
class GuardianComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  //Used inbuilt 'fetch' for speed
  componentDidMount() {
    fetch("https://content.guardianapis.com/search?q=environment&from-date=2019-01-01&api-key=cb03ed79-27c2-417b-859e-08a5a3bd3285")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.response.results
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.sectionName}>
              <a href={item.webUrl}>{item.webTitle}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
}

class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your search term was: ' + this.state.value);
    event.preventDefault();
  }
}

export default GuardianComponent;
