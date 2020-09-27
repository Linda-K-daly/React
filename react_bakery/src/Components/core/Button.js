import React, { Component } from 'react';


class Button extends Component {

  
    render() {
      return (
        
  
        <div>
        <button onClick = {this.props.onClick} className = "btn btn-primary" >
          {this.props.children}
        </button>
        </div>
      );
    }
  }
  
  export default Button;
  