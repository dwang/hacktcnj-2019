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
    this.handleButton = this.handleButton.bind(this);
  }

  handleClick() {
    if (this.state.showNav === false) {
      this.setState({
        showNav: true
      })
    }
  }

  handleButton(e) {
    this.setState({
      showNav: false
    })
    let event = e.currentTarget.innerHTML;
    if (event === "Home") {
      this.props.clickHome();
    } else if (event === "Help Forum") {
      this.props.clickForum();
    }
  }

  render() {
    return(
      <div className="topNav">
        <div className="button">
          <Button onClick={this.handleClick} />
        </div>
        <SideNavBar handleNav={this.state.showNav}
                    onHideNav={()=>this.setState({showNav:false})}
                    buttonClick={this.handleButton}/>
      </div>
    )
  }
}

export default TopNavBar;
