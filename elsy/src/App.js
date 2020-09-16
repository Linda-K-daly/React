import React, {} from 'react';

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
        <div class= "container-fluid"> 
            Battements_de_coeur : {MIN_HEART}
            Temperature : {MIN_TEMPERATURE}
            Nombre_de_pas : {MIN_STEPS}
          
            
            
    
    
    </div>

      <div>
        Bonjour!
      </div>
      </div>
    );
  }
}

export default App;