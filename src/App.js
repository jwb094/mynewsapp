import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/index";
//import MainPage from "./pages/index";
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
<Router>
  <div class="ui stackable container menu ">

    <img src="assets/images/logo.png"/>
<Route exact path="/" />
  
  <a class="item"> <Link exact activeStyle={
              {color:'green'}
            } to="/">Home</Link></a>
  <a class="item">

  <Link exact activeStyle={
              {color:'green'}
            } to="/about">Home</Link>
  </a>
  <a class="item">
  <Link exact activeStyle={
              {color:'green'}
            } to="/search">Search</Link>
  </a>
</div>

<Route path="/" exact strict render={MainPage} />
<Route path="/" exact strict render={MainPage} />
<Route path="/search" exact strict render={SearchPage} />
</Router>

  );
}

export default App;
