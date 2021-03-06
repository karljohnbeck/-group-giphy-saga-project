import React, { Component } from 'react';
import Search from '../SearchGIF/SearchGIF.js'
import Favorites from '../Favorites/Favorites.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import SearchGIF from '../SearchGIF/SearchGIF.js';
import './App.css';




class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>

        <header>
        <div>
        <h1>Giphy Search!</h1>
        <h5></h5>

        </div>
        <nav>
          <button><Link to="/">Search</Link></button>
          <button><Link to="/favorites" >Favorites</Link></button>
        </nav>
        </header>

        <Route exact path="/" component={Search} />
        <Route path="/favorites" component={Favorites} />

      </Router>
      
      </div>
    );
  }

}

export default App;
