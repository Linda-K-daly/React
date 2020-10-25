import React from 'react';
import Card from './movie/Card.js';
import moment from 'moment'
import {API_KEY} from '../service/network'


class Discover extends React.Component {

    constructor() {
        super();
    
        this.state = {
            currentPage: 0,
            movies: [],
        }
    
    };
    
    componentDidMount() {
        const TODAY = moment().toISOString();
        const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
    
        console.log('Discover Today', TODAY)
    
        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                // console.log('hello fetch', json.results)
                console.log('Discover json', json)
                this.setState({
                    movies: json.results,
                })
            });
    }
    
    
    
    
    render() {
        // console.log('hello render', this.state)
        // console.log('hello les movies', this.state.movies)
        return (
            <div className="row col-6">
                
                {this.state.movies.map (one => (<Card/>))}
    
            </div>
    
    
    
        );
    
    
    }
    
    }

export default Discover;