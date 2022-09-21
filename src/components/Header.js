import React from 'react'
// import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="">
      <div className="flex h-40 lg:h-20 justify-center lg:justify-start ml-auto lg:ml-20">
        <img
          src="./images/profile.png"
          alt="Kleber"
          className="absolute border-4 border-green-400/50 rounded-full mt-4 w-36 2xl:w-60 lg:mt-40 2xl:mt-26" />
      </div>
    </div>
  )
}
