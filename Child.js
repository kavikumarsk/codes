import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.value);
    return <div onClick={() => this.props.callBack("hiiii")}>child;
  <h1>hiiii</h1></div>
  }

}
