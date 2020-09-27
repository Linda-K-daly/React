import React from 'react';
import Person from './components/Person.js'
import HeartRate from './components/HeartRate.js'
import Icon from './components/core/Icon.js'
import Slider from './components/core/Slider.js'
import Temperature from './components/Temperature.js'
import Water from './components/Water.js'

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


    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
  };



  onHeartChange(val) {
    let newWater = this.calculteWater(this.state);

    this.setState({
      heart: val,
      water: newWater
    })
  }

  onStepsChange(val) {
    let newWater = this.calculteWater(this.state);

    this.setState({
      steps: val,
      water: newWater
    })
  }

  onTemperatureChange(val) {
    let newWater = this.calculteWater(this.state);

    this.setState({
      temperature: val,
      water: newWater
    })
  }

  calculteWater(obj) {
    // obj.steps
    // obj.heartRate
    // obj.temperature
    let liters = 1.5

    if (obj.temperature > 20) {
      let temp = obj.temperature - 20
      liters += temp * 0.02
    }

    if (obj.heart > 120) {
      let rate = obj.heart - 120
      liters += rate * 0.0008
    } 

    if (obj.steps > 10000) {
      let walk = obj.steps - 10000
      liters += walk * 0.00002
    }
    return Math.round(liters * 100) / 100

  }



  render() {

    return (

      <div className="App">
        <div className="container-fluid">
          <Icon />
          <Water water={this.state.water}></Water>
          <Person min={MIN_STEPS}
            max={MAX_STEPS}
            onChange={this.onStepsChange}
            steps={this.state.steps}>
          </Person>

          <HeartRate
            min={MIN_HEART}
            max={MAX_HEART}
            onChange={this.onHeartChange}
            heart={this.state.heart} >
          </HeartRate>
          <Temperature min={MIN_TEMPERATURE}
            max={MAX_TEMPERATURE}
            onChange={this.onTemperatureChange}
            temperature={this.state.temperature}>
          </Temperature>
          {/* <Slider></Slider> */}

        </div>
      </div>

    );
  }

}


export default App;