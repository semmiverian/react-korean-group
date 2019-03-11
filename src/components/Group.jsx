import React from 'react'
import Image from './Image'
import ApplicationContext from '../context'


export default function Group({logo, onClick, testId}) {
  return (
    <ApplicationContext.Consumer>
      {
        theme => (
          <div className={`w-1/5 cursor-pointer ${theme.card} rounded shadow flex flex-row justify-center p-3`}
              data-testid={testId}
              onClick={onClick}>
          <Image logo={logo} />
        </div>
        )
      }
    </ApplicationContext.Consumer>
  )
}
