import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import GroceryList from './components/GroceryList';
import SavedLists from './components/SavedLists';
import Recipes from './components/Recipes';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <div className="card text-center m-5 componentContainer">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Your List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/saved lists">Saved Lists</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recipes">Recipes</Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <Route path="/" exact component={GroceryList} />
                <Route path="/saved lists" component={SavedLists} />
                <Route path="/recipes" component={Recipes} />
              </div>
          </div>
          </Router>
      </div>
    );
  }
}

export default App;
