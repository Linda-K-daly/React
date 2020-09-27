import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add.js'
import List from './Components/List.js'
import Pay from './Components/Pay.js'
import Button from './Components/core/Button.js'


class App extends Component {

  constructor(props) {
    super();

    // this.onClickFn = this.onClickFn.bind(this)
    this.state = {

      activeTab: "add",
      items: []
    };

    
  }
  handleClick(activeTab) {
  this.setState({activeTab})
  }
  // onClickTabAdd(val) {
  //   this.setState({
  //     add : val,
     
  //   })

  // }

  // onClickTabList(val) {
  //   this.setState({
  //     list : val,
      
  //   })
  // }

  // onClickTabPay(val) {
  //   this.setState({
  //     pay : val,
      
  //   })
  // }


  render() {
    return (
      <div>

      <div className="App btn-group">
            <Button onClick={this.handleClick.bind(this, 'add')}> Add </Button> 
            <Button onClick={this.handleClick.bind(this, 'list')}> List </Button>
            <Button onClick={this.handleClick.bind(this, 'pay')}> Pay </Button>  
        </div>

        {this.state.activeTab === 'add' &&  <Add /> }
        {this.state.activeTab === 'list' &&  <List /> }
        {this.state.activeTab === 'pay' &&  <Pay /> }
      </div>

    );
  }
}

export default App;

