import React, { Component } from 'react';
// import './App.css';


class Counter extends Component {


    render() {
        return (

            <div>
                <h1>Counter</h1>
                <h2>{this.props.count}</h2>
                <button onClick= {this.props.incrementFn} style = {{backgroundColor:"green"}}>+</button>
                <button onClick= {this.props.decrementFn} style = {{backgroundColor:"red"}}>-</button>



            </div>


        );
    }
  }
  
  export default Counter;
  