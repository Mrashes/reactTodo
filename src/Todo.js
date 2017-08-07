import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



//This is what is in Input, i was going to try changing it to make it work
class Todo extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({todo: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
        //This clicks doesn't increment the other clicks...  I don't know how to put the two together.
        clicks: this.state.clicks + 1
    })
  }
    
  render() {
    return (
      <div>
          <p>This is where the Item to do goes</p> <button >X</button>
      </div>
    );
  }
}

export default Todo;