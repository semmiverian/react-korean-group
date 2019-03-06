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
  return (
    <div className={generatePadding(index)}>
      <div className="bg-white rounded shadow flex flex-col justify-center">
        <img className="cover w-full" src={member.image} alt="apink" />
        <span className="font-medium text-xl text-center p-2">{member.name}</span>
        <span className="font-medium text-subtle-grey text-center p-2">{member.dateOfBirth}</span>
      </div>
    </div>
  )
}
