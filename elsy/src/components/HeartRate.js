import React from 'react';



class HeartRate extends React.Component {
    render() {
        return (

            <div className="Heart box container row col-6 col-md-2" >
                <span className="material-icons" style={{ color: "red", fontSize: "100px" }}>favorite</span>
                <p>{this.props.heart}</p>

            </div>
        );
    }
}

export default HeartRate;