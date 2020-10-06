import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button.js'







class App extends Component {

  constructor(){
    super();

    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: 0,
      region: '',
    }

  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france')
    .then(res => res.json())
    .then(json => {
    // code
    // console.log('[app]', json)

      this.setState({
        name: json[0].name,
        capital: json[0].capital,
        population: json[0].population,
        region: json[0].region,
        flag: json[0].flag
      })
  });
  }



  render() {
    return (
      <div className="App">
         <span>{this.state.name}</span>
         <span>{this.state.capital}</span>
         <span>{this.state.flag}</span>
         <span>{this.state.population}</span>
         <span>{this.state.region}</span>
          
          <Button/>
      </div>
    );
  }
}

export default App;
