import React from 'react';
import Person from './components/Person.js'
import HeartRate from './components/HeartRate.js'
import Icon from './components/core/Icon.js'

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
  render() {

    return (

      <div className="App">
          <div className="container-fluid">
          <Person></Person>
          <Icon></Icon>
          <HeartRate heart={MIN_HEART} />
          {/* <HeartRate></HeartRate> */}
         

          </div>
         
      
      </div>
    );
  }
}

export default App;