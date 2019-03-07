import React, {Component} from 'react'
import './App.css'
import './tailwind.css'

import Home from './containers/Home.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import ApplicationContext from './context'

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

  updateTheme = () => {
    this.setState({
      active: this.state.active === 'dark' ? 'light' : 'dark'
    })
  }

  render() {
    const {theme, active} = this.state
    const activeTheme = theme[active]

    return (
      <ApplicationContext.Provider value={activeTheme}>
        <Provider store={store}>
          <div className={`min-h-screen ${activeTheme.background}`}>
            <Router>
              <>
                <nav
                  className={`flex items-center justify-around flex-wrap ${
                    activeTheme.nav
                  } p-4 shadow sticky content-center mb-4`}
                >
                  <div className={`flex items-center flex-grow mr-6 justify-between ${activeTheme.text}`}>
                    <span className="font-semibold text-xl">Korea Dictionary</span>
                    <span className="font-semibold text-xl cursor-pointer" onClick={this.updateTheme}>
                      {active === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </div>
                </nav>

                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </>
            </Router>
          </div>
        </Provider>
      </ApplicationContext.Provider>
    )
  }
}

export default App
