import React from 'react'

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
  const style = {
    backgroundPosition: 'center',
    backgroundImage: `url(${member.image})`
  }

  return (
    <div className={generatePadding(index)} data-testid="member-container">
      <div className="bg-white rounded shadow flex flex-col justify-center">
        <div className="bg-cover w-full h-big block" style={style} data-testid="member-image" />
        <span className="font-medium text-xl text-center p-2">{member.name}</span>
        <span className="font-medium text-subtle-grey text-center p-2">{member.dateOfBirth}</span>
      </div>
    </div>
  )
}
