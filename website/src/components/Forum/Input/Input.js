import React from 'react';
import './Input.css';

class Input extends React.Component {
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (event.target.value === "") {
        alert('Please enter your incident!')
      } else {
        this.props.postIncident(event.target.value);
        event.target.value = '';
        event.preventDefault();
      }
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="What is your incident?"
          onKeyPress={this.handleKeyPress.bind(this)}
          id='form'
          required="required" />
      </div>
    )
  }
}

export default Input;
