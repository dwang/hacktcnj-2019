import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
  render() {
    return (
      <body className = "background">
        <div className = "red">
          <h1 className = "description">A P2P System to Connect Citizens During Natural Disasters</h1>
          <div className = "flexbox">
            <div className = "col">
              <FontAwesomeIcon icon = "fire" className = "logo" />
              <h1>Fire Department</h1>
            </div>
            <div className = "col">
              <FontAwesomeIcon icon = "traffic-light" className ="logo" />
              <h1>Police Department</h1>
              </div>
            <div className = "col">
              <FontAwesomeIcon icon = "home" className = "logo" />
              <h1>Volunteer Responders</h1>
            </div>
          </div>
        </div>
      </body>
    )
  }
}

export default Home;
