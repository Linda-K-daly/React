import React from 'react';

class MyList extends React.Component {

// créer la méthode getFromLocalStorage qui va retourner un array avec des ID pré-enregistrés
// localStorage.setItem('birthdays', JSON.stringify(['1993-02-02', '2001-09-11']));
// let bdays = localStorage.getItem('birthdays');
// bdays = JSON.parse(bdays);

constructor() {
  super();
  this.getFromLocalStorage = this.getFromLocalStorage.bind(this);

  this.state = {
      movies: [],
      moviesId: this.getFromLocalStorage()
  }
  
};

    
  render() {
    return (
      <div>
      My List
      </div>
    );
  }
}


export default MyList;