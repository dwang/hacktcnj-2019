import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar/SideNavBar.js';
import Forum from './components/Forum/Forum/Forum.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showNav: false};
  }

  render() {
    return (
        <div className="App">
          <div id="sidenav">
            <SideNavBar />
          </div>
          <Forum />
        </div>
    );
  }
}

export default App;
