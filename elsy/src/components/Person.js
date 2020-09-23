import React from 'react';
import Icon from './core/Icon.js'
import Slider from './core/Slider.js';


class Person extends React.Component {
  render() {
    return (

      <div className="box  col-6 col-md-2" >

      < Icon name = "directions_walk"  color = "black"/>
      <p>{this.props.steps}</p>

      <Slider> </Slider>
      
      </div>
    );
  }
}

export default Person;
