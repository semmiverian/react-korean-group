import React, {Component} from 'react'
import './App.css'
import './tailwind.css'

import Home from './containers/Home.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <nav className="flex items-center justify-around flex-wrap bg-white p-4 shadow sticky content-center mb-4">
            <div className="flex items-center flex-grow mr-6">
              <span className="font-semibold text-xl">Korea Dictionary</span>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
