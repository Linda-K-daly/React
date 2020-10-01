import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Add extends Component {

  constructor (props){
  super();

  this.updateItemName = this.updateItemName.bind(this);
  this.updatePrice = this.updatePrice.bind(this);
  this.submitForm = this.submitForm.bind(this);

  this.state = {
    itemName: "",
    price: 1
  }
}
 

  updateItemName(event) {
    this.setState({
      ItemName : event.target.value
     
    })
  }

  updatePrice(value) {
    this.setState({
      price : value,
     
    })
  }

  // handleChange(event) {
  //   this.setState ({value: event.target.value});
  // }


  submitForm(event) {
    // console.log(this.state)
    onType : {this.props.onTypeFn}
    // let newForm = (this.state.input + ' '+ this.state.price);
    event.preventDefault()
  
  }

  // componentDidMount()
  
  render() {
    return (



      <div className="Add col-6">

        <h1>Add</h1>
        <form onClick={this.submitForm}>
          <label>
            <input type="text" name = 'Add' onChange={this.updateItemName} input = {this.state.input} />
          </label>
          <input className = "btn btn-primary" onClick =  {this.submitForm}  type="submit" value="Add" />
        </form>

        <RCSlider min={1}
          max ={10}
          onChange={this.updatePrice}
          price = {this.state.price}
         >{this.state.price + '€'}
        </RCSlider>

        
      </div>


    );
  }
}

export default Add;


//<button onClick= {this.props.incrementFn} style = {{backgroundColor:"green"}}>+</button>