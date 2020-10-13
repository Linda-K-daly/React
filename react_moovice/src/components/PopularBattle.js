
import React from 'react';
import Card from './movie/Card.js';
import MyList from './MyList.js';


                class PopularBattle extends React.Component {

                    constructor() {
                        super();
                        this.choseFilm = this.choseFilm.bind(this);

                        this.state = {
                            currentPage: 1,
                            movies: [],
                            // firstMovie:{}
                            id: 1
                        }
                        
                    };
                


                    componentDidMount() {
                        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
                            .then(res => res.json())
                            .then(json => {
                                // console.log('hello fetchBattle', json.results)
                                this.setState({
                                    movies: json.results,
                                })
                            });
                    }



                    // renderCards() {
                    //     return this.state.movies.map((elem, i) => {
                    //     console.log('je suis index du battle', i)
                    //     console.log('je suis un element du battle', elem)
                    //         return (
                    //             <Card
                    //                 key={i}
                    //                 moviePix={elem.poster_path}
                    //                 movieTitle={elem.title}
                    //                 movieSynopsis={elem.overview}
                    //             >
                    //             </Card>
                    //         )
                    //     })

                    // }

                    choseFilm (id){
                        console.log('chosefilm ok', id)
                        // let myList = []

                        // if(JSON.parse(localStorage.getItem('my-list'))) {
                        //     // console.log('Hello localstorage') apparaît au 2ème clik car au 1er c'est un array vide . au 2è click on pousse la liste dans l'array
                        //     myList = JSON.parse(localStorage.getItem('my-list'))
                        // }

                        let myList = JSON.parse(localStorage.getItem('my-list')) || [] 

                        if (!myList.includes(id)) {
                            myList.push(id)
                            localStorage.setItem('my-list', JSON.stringify(myList))
                        }

                        // console.log('myList', myList)

                        this.setState({
                            currentPage: this.state.currentPage + 1
                        })
                    }


                    render() {
                        const {
                            movies,
                            currentPage,
                        } = this.state

                        const secondIndex = currentPage * 2 - 1
                        const firstIndex = secondIndex - 1
                        // console.log('render de PopularBattle', this.state)

                        const firstMovie = movies[firstIndex]
                        const secondMovie = movies[secondIndex]

                        if (firstMovie === undefined) {
                            return <div>Movie on loading</div>
                        }

                        if (secondMovie === undefined) {
                            return <div>Movie on loading</div>
                        }

                        console.log('j/affiche lefirstMovie', firstMovie)

                        return (
                            <div>
                                {/* {{this.renderCards()}} */}
                                <button onClick= {() => this.choseFilm(firstMovie.id)}>
                                    <Card
                                        movieTitle={firstMovie.title}
                                        movieSynospsis={firstMovie.overview}
                                        moviePix={firstMovie.poster_path}
                                        movieId= {firstMovie.id}
                                    />
                                </button>
                                <button onClick= {() => this.choseFilm(secondMovie.id)}>
                                    <Card
                                        movieTitle={secondMovie.title}
                                        movieSynospsis={secondMovie.overview}
                                        moviePix={secondMovie.poster_path}
                                        movieId= {secondMovie.id}
                                    />
                                </button>
                                    <MyList choseFilm={() => this.choseFilm()}/>

                            </div>




                        );


                    }





                }

export default PopularBattle;