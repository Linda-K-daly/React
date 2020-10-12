import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover.js';
import DiscoverBattle from './components/DiscoverBattle.js';
import MyList from './components/MyList.js';
import Popular from './components/Popular.js';
import PopularBattle from './components/PopularBattle.js';



class App extends Component {




  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My list</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Discover/>
            </Route>
            <Route exact path="/battle/">
            <DiscoverBattle/>
            </Route>
            <Route exact path="/popular/">
              <Popular/>
            </Route>
            <Route exact path="/popular-battle/">
              <PopularBattle/>
            </Route>
            <Route exact path="/my-list/">
              <MyList/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
