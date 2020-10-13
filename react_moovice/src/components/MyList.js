import React from 'react';
import Card from './movie/Card.js';

class MyList extends React.Component {

  // créer la méthode getFromLocalStorage qui va retourner un array avec des ID pré-enregistrés
  // localStorage.setItem('birthdays', JSON.stringify(['1993-02-02', '2001-09-11']));
  // let bdays = localStorage.getItem('birthdays');
  // bdays = JSON.parse(bdays);

  constructor() {
    super();
  

    this.state = {
      movies: [],
      movieIds: JSON.parse(localStorage.getItem('my-list'))
    }

  };


  componentDidMount() {

    const theList = (movieId) =>
      fetch(`http://api.themoviedb.org/3/movie/${movieId}?api_key=134d92c3d72c8501356da2496ace8c7e`)
        .then(res => res.json())
        .then(data => data); // data[0] -> we receive an array of one element, so we return the first element directly
        console.log('salut la liste', theList) 

        
    // create an array of promises
    const promises = this.state.movieIds.map(movieId => theList(movieId));
    console.log("où est le state", this.state.movieIds)
    // execute all promises
    Promise.all(promises)
      .then((theList) => {
        // receives an array of responses
        // console.log('montre moi le card du film 1', movieIds[0]);
        // console.log('montre moi le card du film 2', movieIds[1]);
      });

      this.setState({
        movies: theList
      })

    console.log('ou est la liste?', theList)
  }


  render() {
    return (
      <div>
        {this.state.movieIds}
      <Card 
      movieTitle={secondMovie.title}
      movieSynospsis={secondMovie.overview}
      moviePix={secondMovie.poster_path}
      movieId= {secondMovie.id}
      />
      </div>
    );
  }
}


export default MyList;



// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]