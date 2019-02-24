import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar/TopNavBar.js';
import PageSelect from './components/TopNavBar/PageSelect/PageSelect';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFire, faTrafficLight, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faFire, faTrafficLight, faHome)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      show: [
        {showHome: true},
        {showForum: false}
      ]
    };
    this.selectHome = this.selectHome.bind(this);
    this.selectForum = this.selectForum.bind(this);
  }

  selectHome() {
    this.setState({
      show: [
        {showHome: true},
        {showForum: false}
      ]
    })
  }

  selectForum() {
    this.setState({
      show: [
        {showHome: false},
        {showForum: true}
      ]
    })
  }


  render() {
    return (
        <div className="App">
          <TopNavBar clickHome={this.selectHome} clickForum={this.selectForum}/>
          <PageSelect selectPage={this.state.show} />
        </div>
    );
  }
}

export default App;
