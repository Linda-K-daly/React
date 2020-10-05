import React, { Component } from 'react';
import Add from './Add';

class List extends Component {





  render() {
    console.log('hello les props', this.props)
    return (



      <div className="List" onClick={this.props.onClick}>
        <h1>List</h1>
        <ul className="list-group">
          {this.props.items.map((elem, index) => {
            return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              {elem.itemName}  {elem.price}
            </li>
          }
          )}
        </ul>
      </div>
    );
  }
}

export default List;


//   {/* autre syntaxe
// {this.props.items.map((elem, index) => <li key = {index}> {elem.itemName} {elem.price} </li> } */}