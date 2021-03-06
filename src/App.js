import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import PostPage from './containers/PostPage';




class App extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
   

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/postPage" component={PostPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;