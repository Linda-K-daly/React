import React from 'react';
import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


class Slider extends React.Component {

    render() {

        return ( 

        <div className = "Slide">

            <RCSlider>
            {this.props.max}
            {this.props.min}
            {this.state.onChange}
            {this.props.value}
            </RCSlider>
        </div>


        );
    }
}

export default Slider;