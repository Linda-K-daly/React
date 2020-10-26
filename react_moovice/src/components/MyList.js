import React from 'react';
import Card from './movie/Card.js';
import {API_KEY} from '../service/network'

class MyList extends React.Component {

      constructor() {
        super()

        this.state = {
          movies: [],
          movieIds : this.getFromLocalStorage()
        };
        
      }


      componentDidMount() {

        //  je crée mon array de fetch/promesses qui contient les requêtes film par film en fonction de leur ID
        

        const arrayFetch = this.state.movieIds.map(elem => {
          const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
          return fetch(url).then(res => res.json())
        })  

        //  ici je récupère toutes les réponses de toutes mes requêtes
        Promise.all(arrayFetch)
            .then(res => {
                console.log ('[MyList results]' , res);
                const newArray = res.map ( elem => {
                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path}`
                    }
                })
                console.log ('[MyList] results', newArray)
                this.setState({
                  movies: newArray
                })
              })
              .catch(err => console.log(err))
        }

      getFromLocalStorage(){
          const myList= JSON.parse(localStorage.getItem('my-list'));
          console.log('[MyList]' , myList);
          return myList
         
        }

  render() {
    return (
      <div>
        {this.state.movies.map(elem => {
          return (
            <Card title= {elem.title} description={elem.description} imgUrl= {elem.imgUrl}/>
          )
        })}
      
      </div>
    );
  }
}


export default MyList;



