import React, { Component } from 'react';
// import './App.css';
import Counter from './components/counter';

class App extends Component {

  constructor() {
    super();
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }


  state = {
    count: 1
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount() {
    this.setState({
      count: Math.max(this.state.count - 1,0)
    })
  }

  render() {
    return (
      <div className="App" style={{textAlign: "center"}}> 
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount} style = {{backgroundColor:"green"}}>+</button>
        <button onClick={this.decrementCount} style = {{backgroundColor:"red"}}>-</button>
        <Counter  count={this.state.count} incrementFn = {this.incrementCount} decrementCount = {this.decrementCount}></Counter>
      </div>
    );
  }
}

export default App;
