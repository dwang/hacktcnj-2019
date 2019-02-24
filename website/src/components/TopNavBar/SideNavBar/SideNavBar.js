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
          title={<div>Hello octo</div>}
          titleStyle={{backgroundColor: '#b0b2b2'}}
          items={[
            <div onClick={this.props.buttonClick}>Home</div>,
            <div onClick={this.props.buttonClick}>Help Forum</div>]} />
      </div>
    )
  }
}

export default SideNavBar;
