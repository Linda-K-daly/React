import React from "react";
import Card from '../city/Card'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Card
        name= {this.props.cities[0].name}
        slug={this.props.cities[0].slug}
        source= {this.props.cities[0].source}
          />
         
      </div>
    );
  }
}
export default Home;
