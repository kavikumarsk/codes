import React, { Component } from "react";
export default class Clscmp extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
componentDidMount(){
    this.timerID = setInterval(() => this.Inter(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  Inter() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h2>class</h2>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
