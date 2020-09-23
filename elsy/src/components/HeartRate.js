import React from 'react';
import Icon from './core/Icon.js'
import RCSlider, { Range } from 'rc-slider';



class HeartRate extends React.Component {
    render() {
        return (

            <div className="box col-6 col-md-2" >
                < Icon name = "favorite"  color = "red"/>


                <p> {this.props.heart} BPM</p>
                <Slider {this.props.min} {this.props.max}/>
               
              
                
            </div>
             
        );
    }
}

export default HeartRate;