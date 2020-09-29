import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add.js'
import List from './Components/List.js'
import Pay from './Components/Pay.js'
import Button from './Components/core/Button.js'


class App extends Component {

  constructor(props) {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    // this.onClickFn = this.onClickFn.bind(this)
    this.state = {

      activeTab: 'add',
      items: []
    };

    
  }
  // handleClick(activeTab) {
  // this.setState({activeTab})
  // }

  onClickTabAdd() {
    this.setState({
      activeTab: 'add',
     
    })
  }

  onClickTabList() {
    this.setState({
      activeTab: 'list',
      
    })
  }

  onClickTabPay() {
    this.setState({
      activeTab: 'pay'
      
    })
  }


  render() {
    return (
      

        <div className="App">
        <Button isSelected={this.state.activeTab === 'add'} onClick={this.onClickTabAdd}>
          Add
        </Button>
        <Button isSelected={this.state.activeTab === 'list'} onClick={this.onClickTabList}>
          List
        </Button>
        <Button isSelected={this.state.activeTab === 'pay'} onClick={this.onClickTabPay}>
          Pay
        </Button>

        {this.renderContent()}
        {/* {this.state.activeTab === 'add' ? <Add></Add>: (this.state.activeTab === 'list' ? <List></List> : <Pay></Pay>)} */}
      </div>

    );
  }
}

export default App;

