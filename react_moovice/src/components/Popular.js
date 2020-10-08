import React from 'react';
import Card from './movie/Card.js';

class Popular extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: []
        }

    };

        componentDidMount() {
            fetch('https://api.themoviedb.org/3/movie/550?api_key=134d92c3d72c8501356da2496ace8c7e')
                .then(res => res.json())
                .then(json => {
                    console.log(['fetch'], 'hello fetch', json)
                    this.setState({
                        poster_path : json.results.poster_path,
                        movies : json.results.movies,
                        moviePix: json.results.moviePix,
                        movieTitle: json.results.movieTitle,

                    })
                
                });
    }

               

    renderCards() {
        return this.props.map((elem, index) => {
            return (
            <Card 
            key= {index}
            poster_path= {elem.poster_path}
            moviePix= {elem.moviePix} 
            movieTitle= {elem.movieTitle}
            >
            </Card>
            )
        })
  
      }
        render() {
            return (
                <div>
                    Popular
                </div>
            );
        }


}


    export default Popular;