import React from 'react'
import ApplicationContext from '../context'
import {Link} from 'react-router-dom'

export default function Navigation({active}) {
  return (
    <ApplicationContext.Consumer>
      {({text, nav, changeTheme}) => (
        <nav className={`flex items-center justify-around flex-wrap ${nav} p-4 shadow sticky content-center mb-4`}>
          <div className={`flex items-center flex-grow mr-6 justify-between ${text}`}>
            <Link to="/" className="font-semibold text-xl no-underline text-black">
              <span className="font-semibold text-xl">Korea Dictionary</span>
            </Link>
            <div>
              <Link to="/find-group" className="no-underline p-2 font-semibold text-lg cursor-pointer text-black">
                Find Group
              </Link>
              <span className="p-2 font-semibold text-lg cursor-pointer" onClick={changeTheme}>
                {active === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </div>
          </div>
        </nav>
      )}
    </ApplicationContext.Consumer>
  )
}
