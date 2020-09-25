import React from 'react';
import Icon from './core/Icon.js'
import Slider from './core/Slider.js'



class HeartRate extends React.Component {
    render() {
        return (

            <div className="box col-6 col-md-2" >
                < Icon name = "favorite"  color = "red"/>


                <p> {this.props.heart} BPM</p>
                <Slider min = {this.props.min} 
                        max = {this.props.max} 
                        onChange = {this.props.onChange} 
                        value = {this.props.heart}> 
                </Slider>
               
              
                
            </div>
             
        );
    }
}

export default HeartRate;