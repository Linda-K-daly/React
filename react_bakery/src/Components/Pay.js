import React, { Component } from 'react';

import Card from './products/Card'





class Pay extends Component {

  constructor() {
    super();

  this.state = {
      basket: [],
      total: 0,
      totalVat: 0,
      totalEcoTax: 0
  }

  this.onClickProduct = this.onClickProduct.bind(this);
  this.renderCards = this.renderCards.bind(this)


  }
    onClickProduct(name, price) {
      console.log('on clique!', name, price)
      
    }

    renderCards() {
      return this.props.items.map((elem, index) => {
          return (
          <Card 
          key= {index}
          itemName= {elem.itemName} 
          price= {elem.price}
          onClickFn= {this.onClickProduct}>
          </Card>
          )
      })

    }
  render() {
    return (



      <div className="Pay">
        <h2>Pay</h2>
        <div>{this.state.total}</div>
        {/* <Card itemName= "croissant"></Card> */}
        {this.renderCards()}
      </div>
    );
  }
}

export default Pay;