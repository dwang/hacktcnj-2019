import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forum from './components/Forum/Forum/Forum.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forum />
      </div>
    );
  }
}

export default App;
