import React from 'react';
import Card from './movie/Card';

class PopularBattle extends React.Component {

    constructor(){
      super();

      this.state= ({
        currentPage: 1,
      
      })

    }



  componentDidMount(){
   fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
        .then(res =>  res.json())
        .then(json => {
          console.log("je suis le render de pop" , json.results) 
            this.setState({
              currentPage: json.results,
            })
        })
 
  }




  render() {
    const movieList = currentPage
    return (
      <div className= "pop">
            <Card
                    key={this.props.i}
                    moviePix={this.props.poster_path}
                    movieTitle={this.props.title}
                    movieSynopsis={this.props.overview}
            >
            </Card>
      </div>
    );
  
}
}


export default PopularBattle;