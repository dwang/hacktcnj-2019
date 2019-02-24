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
            <a onClick={this.props.buttonClick}>Home</a>,
            <a onClick={this.props.buttonClick}>Help Forum</a>]} />
      </div>
    )
  }
}

export default SideNavBar;
