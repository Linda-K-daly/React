import React, { Component } from 'react';
import '../App.css';


class HomeContainer extends Component {
  render() {
    return (
      <div 
        className="container-fluid"
        style={{
          fontFamily: 'Montserrrat'
        }}>
        <div
            className= 'row'>
            <div  
              className= 'col-lg-8 col-md-4 col-12'>
              <p>
                Je vérifie que les 2 mots : Voleur et <span style={{fontFamily: 'serif'}}>Voleur</span> ont une police d'écriture différente
              </p>
            </div>
            <div
              className= 'col-lg-8 col-md-4 col-12'>
              Une autre phrase
            </div>
          </div>
        </div>
            
    );
  }
}

export default HomeContainer;
