import React from 'react';

class Popular extends React.Component {

    constructor() {
        super();

        this.state= {
            movies: []
        }

    };

        componentDidMount() {
            fetch('https://api.themoviedb.org/3/movie/550?api_key=134d92c3d72c8501356da2496ace8c7eance')
                .then(res => res.json())
                .then(json => {
                    console.log(['fetch'], 'hello fetch')
                });
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