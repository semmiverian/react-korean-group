import React from 'react'

export default function Group({logo, onClick}) {
  return (
    <div className="w-1/5 cursor-pointer bg-white rounded shadow flex flex-row justify-center p-3" onClick={onClick}>
      <img className="cover h-48 w-48" src={logo} alt="apink" />
    </div>
  )
}
