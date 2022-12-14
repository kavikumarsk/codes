import React, { Component } from "react";
import "./login.css";
const checkParameter = 
  {
    email: "login",
    password: "123",
  }

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="login">
        <form>
          <label>Email:</label>
          <input onChange={(e) => this.setState({ email: e.target.value })} />
          <br></br>
          <label>Password:</label>
          <input
            onChange={(e) => this.setState({ password: e.target.value })}
            type={"password"}
          />
        </form>
        <div className="btn">
              <button
                onClick={() => {
                  console.log(checkParameter,this.state);
                              if (checkParameter.email === this.state.email && checkParameter.password === this.state.password) {
                    window.alert("your password is correct!");
                  } else {
                    window.alert("your password is wrong!");
                  }
                }}
              >
                Login
              </button>
         
        </div>
      </div>
    );
  }
}
