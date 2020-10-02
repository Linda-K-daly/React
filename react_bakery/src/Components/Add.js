import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Add extends Component {

  constructor(props) {
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
      itemName: event.target.value,
    })
  }

  updatePrice(value) {
    this.setState({
      price: value,

    })
  }

  // handleChange(event) {
  //   this.setState ({value: event.target.value});
  // }


  submitForm(event) {
    // console.log(this.state)
    this.props.addItem(this.state.itemName, this.state.price)
    // let newForm = (this.state.input + ' '+ this.state.price);
    event.preventDefault()

  }
  // submitForm(event) {
  //   // let newForm = this.state.input + ' ' + this.state.price + '€'
  //   console.log('je passe par submitForm')
  //   this.props.addItem(this.state.input, this.state.price)
  //   event.preventDefault()



  // componentDidMount()

  render() {
    return (

      <div className="Add col-6">

        <h1>Add</h1>
        <form>
          <label>
            <input type="text" name='Add' onChange={this.updateItemName} input={this.state.itemName} />
          </label>

          <RCSlider name="value"
            min={1}
            max={10}
            onChange={this.updatePrice}
            price={this.state.price}

          >{this.state.price + '€'}
          </RCSlider>
          <input className="btn btn-primary" onClick={this.submitForm} type="submit" value="Add" />

        </form>



      </div>


    );
  }
}


export default Add;


//<button onClick= {this.props.incrementFn} style = {{backgroundColor:"green"}}>+</button>