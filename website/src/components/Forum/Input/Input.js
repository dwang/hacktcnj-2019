import React from 'react';
import './Input.css';
import Image from '../Input/Image.js';

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
      <div id="input">
        <form action="https://reliefgrid.net/api/addIncident"
              method="post"
              encType="multipart/form-data"
              id="upload-form">
          <input
            placeholder="What is your incident?"
            onKeyPress={this.handleKeyPress.bind(this)}
            id='form'
            name = 'message'
            required="required" />
          <Image />
        </form>
      </div>
    )
  }
}

export default Input;
