import React, {Component} from 'react'
import './App.css'
import './tailwind.css'

import Home from './containers/Home.jsx'
import FindGroup from './containers/FindGroup.jsx'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import ApplicationContext from './context'

import Navigation from './components/Navigation'

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
    active: 'light'
  }

  changeTheme = () => {
    this.setState(
      prevState => {
        return {
          active: prevState.active === 'light' ? 'dark' : 'light'
        }
      },
      () => {
        console.log('callback function', this.state.active)
      }
    )
  }

  render() {
    const {theme, active} = this.state

    const contextValue = {
      ...theme[active],
      changeTheme: this.changeTheme
    }

    return (
      <ApplicationContext.Provider value={contextValue}>
        <Provider store={store}>
          <ApplicationContext.Consumer>
            {value => (
              <div className={`${value.background} min-h-screen`}>
                <>
                  <Navigation active={active} changeTheme={value.changeTheme} />

                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/find-group" component={FindGroup} />
                  </Switch>
                </>
              </div>
            )}
          </ApplicationContext.Consumer>
        </Provider>
      </ApplicationContext.Provider>
    )
  }
}

export default App
