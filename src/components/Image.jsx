import React from 'react'

export default function Image({logo}) {
  return (
    <img className="cover h-48 w-48" src={logo} alt={logo} />
  )
}
