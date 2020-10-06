import React, { Component } from 'react';



class Button extends Component {

 render() {
    console.log(this.props.children)
    return (

            <button>{this.props.children}</button>
            

    )
 }

 

  }
export default Button;
