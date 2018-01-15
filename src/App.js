import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import ArticleInfo from "./components/ArticleInfo";
import ManageArticle from "./components/common/ManageArticle";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/create" component={ManageArticle}></Route>
                  <Route path="/article-info/:name" component={ArticleInfo}></Route>
                  <Route path="/edit/:name" component={ManageArticle}></Route>
                  <Route component={FourOhFour}></Route>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
