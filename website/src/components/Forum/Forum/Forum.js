import React from "react";
import "./Forum.css";
import PostList from "../PostList/PostList.js";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      image: '+'
    };
    this.postIncident = this.postIncident.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const array = [];
    const posts = fetch('https://reliefgrid.net/api/getIncidents')
                        .then(response => {
                          response.map(post => {
                          array.push(post.message);
                        })})
    this.setState({
      postList: array
    });
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

  onChange(e) {
    if (e.target.value !== '') {
      let event = e.target.value;
      let path = event.split("\\");
      let length = path.length
      this.setState({
        image: path[length-1]
      })
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="container">
        <form
          action="https://reliefgrid.net/api/addIncident"
          method="post"
          encType="multipart/form-data"
          id="upload-form">
          <div className="inputWrapper">
            <input
              placeholder="Describe the incident"
              onKeyPress={this.handleKeyPress.bind(this)}
              id="form"
              name="message"
              required="required"  />
            <input type="file" name="image" id="image" className="inputfile" onChange={this.onChange} />
            <label for="image" >{this.state.image}</label>
            <input type="hidden" name="image_name" value={this.state.file} />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
        <PostList postList={this.state.postList} />
      </div>
    );
  }
}

export default Forum;
