import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forum from './components/Forum/Forum/Forum.js';

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
          <Forum />
        </div>
      </body>
    );
  }
}

export default App;
