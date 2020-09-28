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
      input : val,
     
    })
  }

  submitForm(val) {
    console.log(this.setState.updateInput() , this.setState.updatePrice())
    }
  
  render() {
    return (



      <div className="Add">

        <h1>Add</h1>
        <form>
          <label>
            <input type="text" onChange={this.updateInput} />
          </label>
          <input className = "btn btn-primary" type="submit" value="Add" />
        </form>

        <RCSlider min={1}
          max ={10}
          onChange={this.props.updatePrice}
         >
        </RCSlider>

        <button onClick = {this.props.onClick} className = "btn btn-primary" >
          {this.props.submitForm}
        </button>
      </div>


    );
  }
}

export default Add;


//<button onClick= {this.props.incrementFn} style = {{backgroundColor:"green"}}>+</button>