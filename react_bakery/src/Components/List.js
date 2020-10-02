import React, { Component } from 'react';

class List extends Component {


  render() {
    return (



      <div className="List">

        <h1>List</h1>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
             {this.props.itemList}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
          </li>
        </ul>

      </div>
    );
  }
}

export default List;