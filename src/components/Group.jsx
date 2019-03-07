import React from 'react'
import ApplicationContext from '../context'

export default function Group({logo, onClick}) {
  return (
    <ApplicationContext.Consumer>
      {theme => (
        <div
          className={`w-1/5 cursor-pointer ${theme.card} rounded shadow flex flex-row justify-center p-3`}
          onClick={onClick}
        >
          <img className="cover h-48 w-48" src={logo} alt="apink" />
        </div>
      )}
    </ApplicationContext.Consumer>
  )
}
