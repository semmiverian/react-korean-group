import React from 'react'
import ApplicationContext from '../context'

export default function Navigation({ active }) {
  return (
    <ApplicationContext.Consumer>
      {
        ({text, nav, changeTheme}) => (
          <nav className={`flex items-center justify-around flex-wrap ${nav} p-4 shadow sticky content-center mb-4`}>
            <div className={`flex items-center flex-grow mr-6 justify-between ${text}`}>
            <span className="font-semibold text-xl">Korea Dictionary</span>
            <span className="font-semibold text-xl" onClick={changeTheme}>{
              active === 'dark' ? 'Light Mode' : 'Dark Mode'
            }</span>
          </div>
          </nav>
        )
      }
    </ApplicationContext.Consumer>
  )
}
