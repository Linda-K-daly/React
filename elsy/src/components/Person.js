import React from 'react';
import Icon from './core/Icon.js'
import Slider from './core/Slider.js'



class Person extends React.Component {
  render() {
    return (

      <div className="box  col-6 col-md-2" >
        < Icon name="directions_walk" color="black" />
        <p>{this.props.steps} steps</p>
        <Slider min={this.props.min}
                max={this.props.max}
                onChange={this.props.onChange}
                value={this.props.steps}>
        </Slider>

      </div>
    );
  }
}

export default Person;
