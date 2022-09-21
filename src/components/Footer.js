import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="h-12 w-full fixed bottom-0 self-end">
        <div className="flex flex-wrap items-center h-full justify-evenly lg:justify-end lg:gap-6 lg:mr-12">
          <a href="https://github.com/klebertech" target="_blank" rel="noreferrer">
            <img
              src="./images/github.png"
              alt="Github"
              className="w-8 text-white" />
          </a>
          <a href="mailto:kleberst88@gmail.com" target="_blank" rel="noreferrer">
            <img
              src="./images/gmail.png"
              alt="Email"
              className="w-8 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/klebertech" target="_blank" rel="noreferrer">
            <img
              src="./images/linkedinwhite.png"
              alt="Linkedin"
              className="w-8 text-white" />
          </a>
        </div>
      </footer>
    )
  }
}
