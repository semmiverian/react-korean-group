import React from 'react'
import ApplicationContext from '../context'

const generatePadding = index => {
  const getIndex = generateIndex(index)
  const dictionary = {
    0: 'pr-2',
    1: 'px-1',
    2: 'px-1',
    3: 'pl-2'
  }

  return `w-1/4 ${dictionary[getIndex]} pb-4`
}

const generateIndex = index => {
  if (index <= 3) {
    return index
  }
  return generateIndex(index - 4)
}

export default function Member({member, index}) {
  return (
    <ApplicationContext.Consumer>
      {theme => (
        <div className={generatePadding(index)}>
          <div className={`${theme.card} rounded shadow flex flex-col justify-center`}>
            <img className="cover w-full" src={member.image} alt="apink" />
            <span className={`font-medium text-xl text-center p-2 ${theme.text}`}>{member.name}</span>
            <span className={`font-medium text-center p-2 ${theme.text}`}>{member.dateOfBirth}</span>
          </div>
        </div>
      )}
    </ApplicationContext.Consumer>
  )
}
