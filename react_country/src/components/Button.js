import React, { Component } from 'react';



class Button extends Component {

    constructor() {
        super();
        this.onClik = this.onClick.bind(this)
    }

    onClick() {
        this.props.onClick()
    }

    render() {
        console.log(this.props.children)
        return (

                <button>send</button>
            

    )
 }

 

  }
    export default Button;
