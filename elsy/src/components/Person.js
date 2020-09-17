import React from 'react';
import "../css/styles.css"


class Person extends React.Component {
  render() {
    return (
      
      <div className="Person">
        <div className="style" >
          <div className="box"></div>
          <div className="container"></div>
          <div className="row"></div>
          <div className="col-md-2"></div>
          <div className="col-6"></div>
          <span className="material-icons">
            <link rel="icon" href="arrow_forward_ios" alt="direction_walker" />
          </span>
        </div>
      </div>
    );
  }
}

export default Person;