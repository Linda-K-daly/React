import React from "react";
import Api from "../../utils/Api";
import Card from '../city/Card'


class Home extends React.Component {

  render() {

    const { cities } = this.props

    console.log('cities dans home', cities);

    return (
      <div>
        {cities.map((elem) => {
          return (
            <Card
              name={elem.name}
              slug={elem.slug}
              source={elem.source} />
        )
        })
        })
      </div>
    );
  }
}

export default Home;
