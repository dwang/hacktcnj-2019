import React from 'react';
import './Input.css';

class Input extends React.Component {

  constructor() {
    super();
    this.state = {
        name: '',
        message: ''
    }
  }


  handleUsername(event) {
    if (event.key === 'Enter') {
      if (event.target.value.length <= 1) 
        alert('Please enter in a valid username!')
      else {
        this.state.name = event.target.value;
        console.log(this.props.name);
        event.preventDefault();
      }
    }
  }


  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (event.target.value === "") {
        alert('Please enter your incident!')
      } else {
        this.setState ({name: event.target.value});
        event.target.value = '';
        event.preventDefault();
      }
    }
  }
  

  render() {
    return (
      <div id="input">
        <input
          placeholder="Your Full Name"
          onKeyPress={this.handleUsername.bind(this)}
          id='form'
          required="required" />

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
