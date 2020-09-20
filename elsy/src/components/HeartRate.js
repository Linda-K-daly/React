import React from 'react';
import Icon from './core/Icon.js'


class HeartRate extends React.Component {
    render() {
        return (

            <div className="box col-6 col-md-2" >
                < Icon name = "favorite"  color = "red"/>

                <p> {this.props.heart}</p>
            </div>
             
        );
    }
}

export default HeartRate;