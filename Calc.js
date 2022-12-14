import React, { Component } from "react";
//import "./Calc.css";
import "./Calculator.css";
const calciValues = [
  "7",
  "8",
  "9",
  "C",
  "4",
  "5",
  "6",
  "x",
  "1", 
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

export default class Calc extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div className="calcultor">
        <div className="input">
          <input
            onChange={(e) =>
              this.setState({ value: e.target.value.replace(/\D/g, "") })
            }
            placeholder="0"
            value={this.state.value}
          />
          
        </div>
        <div className="btn">
          {calciValues.map((val) => {
            return (
              <button
                key={val}
              
                onClick={() => {
                  if (val === "=") {
                    this.setState({ value: eval(this.state.value) });
                  }
                  else if (val === "C") this.setState({ value: "" });
                  else
                    this.setState({
                      value: this.state.value + (val === "x" ? "*" : val),
                    });
                }}
              >
                {val}
                
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
