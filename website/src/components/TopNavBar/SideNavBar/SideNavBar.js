import React from 'react';
import SideNav from 'react-simple-sidenav';
import './SideNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideNavBar extends React.Component {
  render() {
    return (
      <div className="sideNavBar">
        <SideNav
          showNav={this.props.handleNav}
          onHideNav={this.props.onHideNav}
          title={<div className="title">Locating Disasters</div>}
          titleStyle={{backgroundColor: '#3DB2C2'}}
          items={[
            <div className="subpages" onClick={this.props.buttonClick}>Home</div>,
            <div className="subpages" onClick={this.props.buttonClick}>Message Board</div>]} 
          itemStyle      =  {{backgroundColor: '#fff', padding: 0, color: 'black'}}
          itemHoverStyle =  {{backgroundColor: '#FF994D', color: "aliceblue"}}
        />
      </div>
    )
  }
}

export default SideNavBar;
