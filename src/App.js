import React from 'react';
import './App.css';
import Header from './components/Header';
import ArticleSearch from './components/ArticleSearch';
import Footer from './components/Footer';
import Home from "./components/Home";
import {
  Route,
  NavLink,
  HashRouter
}
from "react-router-dom";



// Created as a class because we need to use the state.

class Main extends React.Component {
  render() {
    return(
      <div id='main'>
        <Header/>
        <HashRouter>
          <ul className="headMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="GuardianSearch">Guardian Article Search</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/GuardianSearch" component={ArticleSearch}/>
          </div>
        </HashRouter>

        <Footer/>
      </div>
    )
  }
}

export default Main;