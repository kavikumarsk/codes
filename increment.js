import React, { Component } from "react";
import { useParams, Link } from "react-router-dom";
import "./checkbox.css"

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <Link to="/">
          <button onClick={this.increment}>+</button>
        </Link>
        <span>{this.state.value}</span>
        <button onClick={this.decrement}>-</button>
        <div className="parent">
          <input className="checkBox1" type="checkbox" />
          <input className="checkBox2" type="checkbox" />
          <input className="checkBox3" type="checkbox" />
          </div>
      </div>
    );
  }
}
export default Increment;
