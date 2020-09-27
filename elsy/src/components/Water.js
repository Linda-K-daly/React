import React from 'react'
import Icon from './core/Icon'
import Slider from './core/Slider.js'

class Water extends React.Component {

    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name="local_drink" color="#3A85FF"></Icon>
                <p>{this.props.water} L</p>
                {/* <Slider min={this.props.min}
                        max={this.props.max}
                        onChange={this.props.onChange}
                        value={this.props.temperature}>
                </Slider> */}


            </div>


        )


    }

}


export default Water;