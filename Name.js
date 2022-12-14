import React, { Component } from 'react'

export default class Name extends Component {
    constructor(){
        super();
        this.state={
            value:"hi.."
        }
        
    }
    componentWillMount(){
      this.setState({value:"this is biii..",});
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}jii</h3>
      </div>
    )
  }
}
