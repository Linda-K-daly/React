import React from 'react';
import Person from './components/Person.js'
import HeartRate from './components/Person.js'

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
  render() {

    return (
      
      <div className= "App">
        <div className= "container-fluid"> 
      
            {/* <p>Battements_de_coeur : {MIN_HEART}</p>
            <p>Temperature : {MIN_TEMPERATURE}</p>
            <p>Nombre_de_pas : {MIN_STEPS}</p>    */}
            <Person></Person><HeartRate ></HeartRate>
            <p>const heart : {MIN_HEART}</p>

    </div>

      <div>
        Bonjour!
      </div>
      </div>
    );
  }
}

export default App;