import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends React.Component {
  render() {
    return (
      <FontAwesomeIcon icon="bars" className="button" onClick={this.props.onClick}/>
    )
  }
}

export default Button;
