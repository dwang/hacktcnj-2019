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
        <div className = "blurple">
          <p className="brief">ReliefGrid is a network system designed to aid the rescue process during a natural disaster.</p>
          <p className="work">How It Works</p>
          <p className="test">During a natural disaster, almost always there is no internet present. Qualcomm's DragonBoards are able to host their own website; essentially a hotspot. If the main netowrk goes out, then the network of DragonBoards would be triggered to host their own series of hotspots. In need of help, the citizens would be able to post pictures of the incident and help for relief</p>
          <br></br>
          <p className="work">Why?</p>
          <p className="test">Our goal with ReliefGrid is to help rescue squads and volunteers to locate people who need help, because of the damage that was done due to a natural disaster in their area.</p>
        </div>
      </body>
    )
  }
}

export default Home;
