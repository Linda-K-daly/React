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
    this.addItem = this.addItem.bind(this);
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
    // console.log('tab add click')
    this.setState({
      activeTab: 'add',

    })
  }

  onClickTabList() {
    // console.log('tab add click')
    this.setState({
      activeTab: 'list',

    })
  }

  onClickTabPay() {
    // console.log('tab add click')
    this.setState({
      activeTab: 'pay'

    })
  }

  addItem(itemName, price) {
    //  je copie mon state items dans une variable
    let itemList = this.state.items
    // je fabrique un objet qui récupère les données des paramètres
    let newProduct = {
      itemName: itemName,
      price: price,
    }
    // je rajoute le nouvel objet à la liste
    itemList.push(newProduct)
    //  j'update le state avec la nouvelle liste
    this.setState({
      items: itemList,
    })
  }
  // ***************************************
  // autre solution
  // addItem(itemName, price) {
  //   let itemList = this.state.items;
  //   itemList.push({
  //     itemName,
  //     price
  //   })
  //   this.setState({
  //     items: itemList
  //   })
  // }
  // ****************************************

  renderContent() {
    switch (this.state.activeTab) {
      case 'add':
        return <Add addItemFn={this.addItem} />;
      case 'list':
        return <List items={this.state.items}></List>;
      case 'pay':
        return <Pay items={this.state.items} ></Pay>;
      default:
        return (<h1>Error</h1>)
    }
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

