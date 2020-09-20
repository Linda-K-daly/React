import React from 'react';

 


class Icon extends React.Component {
  render() {
    return (

        <span className="material-icons" style =  {{color: this.props.color, fontSize: "100px"}} >{this.props.name} </span>
        
    
    );
  }
}

export default Icon;
