import React, { Component } from 'react';
import '../App.css';


class Api  {


getHome(){
fetch(`http://localhost:3002${api/home}`)
.then(res => res.json())
.then(json => {
    // console.log('hello fetchBattle', json.results)
    this.setState({
      ,
    })
});
}.



  render() {
    return (
      <div 
        className="Api">
       
        </div>
            
    );
  }
}

export default new Api();



// request().then((data) => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// fetch(url, request)
//   .then(res => res.json())
//   .then(json => {
//     // code
//   });