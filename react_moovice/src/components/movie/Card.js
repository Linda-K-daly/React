import React from 'react';
import PropTypes from 'prop-types'






class Card extends React.Component {

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
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w300${this.props.imgUrl}`} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <p className="card-text">{this.props.id}</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propType = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  description: '',
  imgUrl: './img/placeholder.png',
};

export default Card;