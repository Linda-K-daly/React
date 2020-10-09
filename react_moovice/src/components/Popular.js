import React from 'react';
import Card from './movie/Card.js';
import PopularBattle from './PopularBattle.js';

class Popular extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: []
        }

    };

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
            .then(res => res.json())
            .then(json => {
                // console.log('hello fetch', json.results)
                this.setState({
                    movies: json.results,
                })
            });
    }



    renderCards() {
        return this.state.movies.map((elem, i) => {
        // console.log('je suis index du film', i)
        // console.log('je suis un element', elem)
            return (
                <Card
                    key={i}
                    moviePix={elem.poster_path}
                    movieTitle={elem.title}
                    movieSynopsis={elem.overview}
                >
                </Card>
            )
        })

    }
    render() {
        // console.log('hello render', this.state)
        // console.log('hello les movies', this.state.movies)
        return (
            <div>
                Popular
            {this.renderCards()}
            <PopularBattle 
                    key={this.state.i}
                    moviePix={this.state.poster_path}
                    movieTitle={this.state.title}
                    movieSynopsis={this.state.overview}
                    >

                    </PopularBattle>
            </div>
          


        );

        
    }

}

export default Popular;