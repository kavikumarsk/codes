import React, { Component } from "react";
import { connect } from "react-redux";
import Child from "./Child";
import { actionTypes } from "./redux/reducer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: "",
    };
  }
  render() {
    // console.log(this.props.reducerState);
    return (
      <div>
        <input
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="name"
        />
        <button
          onClick={() => {
            this.props.updateName(this.state.name);
          }}
        >
          Save Name
        </button>
        <br />
        <input
          value={this.state.age}
          onChange={(e) =>
            this.setState({ age: e.target.value.replaceAll(/[^0-9, ]/, "") })
          }
          placeholder="age"
        />
        <button onClick={() => this.props.updateAge(this.state.age)}>
          Save Age
        </button>
        <Child value={"iiiii"} callBack={(val) => console.log(val)} />
      </div>
    );
  }
}
//mapStateToProps to get redux state
const mapStateToProps = (state) => {
  //because of returning can recive redux state in the name of props ex=> this.props.reducerState.name
  return { reducerState: state };
};

// mapDispatchToProps to update redux store through action
// can get dispatch prop inside
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => {
      dispatch({
        type: actionTypes.name,
        payload: name,
      });
    },
    updateAge: (age) => {
      dispatch({
        type: actionTypes.age,
        payload: age,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
