import React from 'react';
import Icon from './core/Icon.js'


class Person extends React.Component {
  render() {
    return (

      <div className="box  col-6 col-md-2" >
        {/* <span className="material-icons" style={{ color: "black", fontSize: "100px" }}>
          directions_walker
          </span> */}

      < Icon name = "directions_walk"  color = "black"/>
      
      </div>
    );
  }
}

export default Person;
