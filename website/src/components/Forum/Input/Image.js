import React from 'react'
import Input from "./Input";
import './Image.css';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    render() {
        return (
        <div>
            <input type="file" name="image" onChange= {this.onChange} />
            <button type="submit">Submit</button>
        </div>
        )
    }
}

export default Image;
