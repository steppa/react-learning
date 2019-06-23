import React, {Fragment} from 'react';
import './App.css';
import ArticleSearch from './components/ArticleSearch';
import Footer from './components/Footer';
import Home from "./components/Home";
import Header from "./components/Header"
import NavBar from  "./components/NavBar";
import {Route, HashRouter } from "react-router-dom";
import PythonContent from "./components/PythonContent";

class Main extends React.Component {
  render() {
    return(
        <Fragment>
          <Header/>
          <HashRouter>
            <NavBar/>
            <section className="container-fluid" id="contentContainer">

              <div className="col"></div>
              <div className="col">
              <Route exact path="/" component={Home}/>

              <Route path="/GuardianSearch" component={ArticleSearch}/>
              <Route path="/PythonContent" component={PythonContent}/>
              </div>
              <div className="col"></div>
            </section>
          </HashRouter>

          <Footer/>
        </Fragment>
    )
  }
}

export default Main;