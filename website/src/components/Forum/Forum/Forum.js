import React from "react";
import "./Forum.css";
import PostList from "../PostList/PostList.js";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
    this.postIncident = this.postIncident.bind(this);
  }

  postIncident(e) {
    let list = this.state.postList;
    list.unshift(e);
    this.setState({
      postList: list
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        alert("Please enter your incident!");
      } else {
        this.props.postIncident(event.target.value);
        event.target.value = "";
        event.preventDefault();
      }
    }
  }

  render() {
    return (
      <div className="container">
        <form
          action="https://reliefgrid.net/api/addIncident"
          method="post"
          encType="multipart/form-data"
          id="upload-form"
        >
          <input
            placeholder="Describe the incident"
            onKeyPress={this.handleKeyPress.bind(this)}
            id="form"
            name="message"
            required="required"
          />

          <div>
            <input type="file" name="image" onChange={this.onChange} />
            <input type="hidden" name="image_name" value={this.state.file} />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forum;
