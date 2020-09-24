import React from 'react';
import Person from './components/Person.js'
import HeartRate from './components/HeartRate.js'
import Icon from './components/core/Icon.js'
import Slider from './components/core/Slider.js'
import './css/bootstrap.min.css'
import './css/styles.css'

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this)
  }
  state = {
    water: 0,
    heart: 120,
    temperature: -10,
    steps: 3000,

  };

  
  onHeartChange(val) {
  this.setState.heart (val = this.state.onChange)
  }

  render() {

    return (

      <div className="App">
        <div className="container-fluid">
          <Person/>
          {this.state.steps}
          <Icon />
          <HeartRate>{this.state.heart} min = {MIN_HEART} max = {MAX_HEART}</HeartRate>
          <Slider></Slider>

        </div>


      </div>
    );
  }
}

export default App;