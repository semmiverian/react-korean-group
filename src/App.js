import React, {Component} from 'react'
import './App.css'
import './tailwind.css'

import Home from './containers/Home.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
class App extends Component {
  state = {
    theme: {
      dark: {
        text: 'text-white',
        background: 'bg-warm-grey',
        nav: 'bg-warm-grey-light',
        card: 'bg-warm-grey-light'
      },
      light: {
        text: 'text-black',
        background: 'bg-grey-lighter',
        nav: 'bg-white',
        card: 'bg-white'
      }
    },
    active: 'dark'
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="bg-grey-lighter min-h-screen">
            <>
              <nav className="flex items-center justify-around flex-wrap bg-white p-4 shadow sticky content-center mb-4">
                <div className="flex items-center flex-grow mr-6 justify-between">
                  <span className="font-semibold text-xl">Korea Dictionary</span>
                  <span className="font-semibold text-xl">Dark Mode</span>
                </div>
              </nav>

              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
