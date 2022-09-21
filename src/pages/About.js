import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class About extends Component {
  render() {
    return (
      <main className="flex flex-wrap flex-col h-screen bg-sky-900">
        <Header />
        <div className="flex flex-wrap flex-col w-72 sm:w-96 h-20 mx-auto mt-32">
          <div className=" border-2 border-slate-300 rounded-lg w-full h-20 ml-auto">
            <div className="flex flex-wrap flex-row justify-between">
              <div className="font-bold">
                <h1 className="text-white ml-4">About me</h1>
              </div>
              <div className="flex flex-wrap flex-row">
                <div className="bg-yellow-600 w-2 h-2 mt-2 mr-2 rounded"></div>
                <div className="bg-green-600 w-2 h-2 mt-2 mr-2 rounded"></div>
                <div className="bg-red-600 w-2 h-2 mt-2 mr-2 rounded"></div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <Footer />
      </main>
    )
  }
}
