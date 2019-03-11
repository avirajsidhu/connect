import React from 'react'
import {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AppLogin from './components/AppLogin'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Router>
          <div>
            <Route exact path={"/"} component={AppLogin} />
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/dashboard"} component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}
