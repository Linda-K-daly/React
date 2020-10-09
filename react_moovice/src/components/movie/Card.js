import React from 'react';

class Cards extends React.Component {

  constructor() {
    super();

    this.state = {
      pix: '.public/placeholder.png'
    }
  }

  componentDidMount() {
    const newPix = 'https://image.tmdb.org/t/p/w300/';

    this.setState({
      pix: newPix,
    })

  }
  render() {
    return (
      <div className="card-top d-inline-flex">
        <div className="card" style={{ width: "18rem" }} >
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w300${this.props.moviePix}`} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.movieTitle}</h5>
            <p className="card-text">{this.props.movieSynopsis}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;