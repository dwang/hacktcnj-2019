import React from 'react';
import Button from '../Button/Button.js';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import './TopNavBar.css';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.showNav === false) {
      this.setState({
        showNav: true
      })
    }
  }

  render() {
    return(
      <div className="topNav">
        <div className="button">
          <Button onClick={this.handleClick} />
        </div>
        <SideNavBar handleNav={this.state.showNav} onHideNav={()=>this.setState({showNav:false})}/>
      </div>
    )
  }
}

export default TopNavBar;
