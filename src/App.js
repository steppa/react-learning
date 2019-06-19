import React from 'react';
import './App.css';
import Header from './components/Header';
import ArticleSearch from './components/ArticleSearch';

// Created as a class because we need to use the state.

class Main extends React.Component {
  render() {
    return(
    <ArticleSearch/>
    )
  }
}

export default Main;