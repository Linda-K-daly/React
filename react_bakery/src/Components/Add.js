import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Add extends Component {


  state = {
    input: "",
    price: 1
  }

  updateInput(val) {
    this.setState({
      input : val,
     
    })
  }

  updatePrice(val) {
    this.setState({
      price : val,
     
    })
  }

  submitForm(val) {
    let newForm = (this.state.input + ' '+this.state.price)
    console.log(newForm)
  }
  
  render() {
    return (



      <div className="Add col-6">

        <h1>Add</h1>
        <form>
          <label>
            <input type="text" onChange={this.updateInput} />
          </label>
          <input onClick =  {this.props.submitForm} className = "btn btn-primary" type="submit" value="Add" />
        </form>

        <RCSlider min={1}
          max ={10}
          onChange={this.props.updatePrice}
         >
        </RCSlider>

        
      </div>


    );
  }
}

export default Add;


//<button onClick= {this.props.incrementFn} style = {{backgroundColor:"green"}}>+</button>