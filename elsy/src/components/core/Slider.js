import React from 'react';
// import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


class Slider extends React.Component {

    render() {

        return ( 

        <div className = "Slide">

            
            {this.props.max}
            {this.props.min}
            {this.state.onChange}
            {this.props.value}
            
        </div>


        );
    }
}

export default Slider;