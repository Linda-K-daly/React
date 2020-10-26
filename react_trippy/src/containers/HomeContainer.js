import React from "react";
import Home from "../components/core/Home";
import Api from "../utils/Api";


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

  Api.getHome().then(result=>
    this.setState({
      cities: result.cities,
    }));
   
  }




  render() {
    console.log("je suis le state du render HC", this.state);
    
    console.log('je suis la',this.state.cities);
    return (
      <div>
        <Home cities={this.state.cities}></Home>
        
      </div>
    );
  }
}

export default HomeContainer;
