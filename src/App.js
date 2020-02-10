import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/index";
import CategoryPage from "./pages/category";
import SearchPage from "./pages/search";
// import {BrowserRouter as Router} from 'react-router-dom';
// import Route from 'react-router-rom/Route';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="ui container">
<Router>
  <div class="ui stackable container menu ">

    <img src="assets/images/logo.png"/>
<Route exact path="/" />
  
  <a className="item"> <Link exact activeStyle={
              {color:'green'}
            } to="/">Home</Link></a>
  <a className="item">

  <Link exact activeStyle={
              {color:'green'}
            } to="/about">Home</Link>
  </a>
  
  <Link exact activeStyle={
              {color:'green'}
            } to="/search"><a className="item">Search</a></Link>
 
 
</div>

<Route path="/" exact strict render={MainPage} />
<Route path="/" exact strict render={CategoryPage} />
<Route path="/search" exact strict render={SearchPage} />
</Router>
</div>

  );
}

export default App;
