import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className="fixed bg-sky-900 text-center">
        <nav className="fixed top-0 h-12 w-full mt-2">
          <ul className="flex flex-wrap flex-row justify-center md:justify-end sm:mr-12 gap-16 mt-4 text-slate-200 cursor-pointer">
            <Link to="/" >
              <li className="hover:text-green-400">Home</li>
            </Link>
            <Link to="/about" >
              <li className="hover:text-green-400">About</li>
            </Link>
            <Link to="/projects" >
              <li className="hover:text-green-400">Projects</li>
            </Link>
          </ul>
        </nav>
      </div> 
    )
  }
}
