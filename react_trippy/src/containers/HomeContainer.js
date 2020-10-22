import React from "react";
import Home from "../components/core/Home";
import Api from "../utils/Api";
import Card from "../components/city/Card"

// import Global from '../Global'
// import Config from '../Config'

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {

    Api.getHome().then(result =>
      this.setState({
        cities: result,
      })
      )
      console.log("bonsoir paaaaarrrrrrriiiiiiiis" , this.state.cities);
  }



  render() {
    console.log("je suis dans le render HC", this.state.cities);

    return (
      <div>
        <Home>{this.state.cities}</Home>
        hello ici
        <Card
        name= {this.state.cities.name}
        slug={this.state.cities.slug}
        source= {this.state.cities.source}
          />
      </div>
    );
  }
}

export default HomeContainer;
