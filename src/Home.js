import React, { Component } from 'react';
import Header from './components/Header';

export default class Home extends Component {
  render() {
    return (
      <main className="flex flex-wrap flex-col h-screen bg-sky-900">
        <Header />
        <section id="initial">
          <div className="mt-28 w-3/4 sm:mt-46 sm:w-1/2 mx-auto xl:ml-auto ">
            <h1 className="text-xl font-bold text-green-400 mb-4">
              Kleber Tavares,
            </h1>
            <h2 className="text-6xl 2xl:text-8xl font-extrabold text-slate-50 mb-4">Learning and Building in the Web</h2>
            <h3 className="text-md 2xl:text-xl font-bold text-slate-400 mb-10">I'm here to build new things mostly using JS and ReactJS, in the free time i'm a enthusiastic of web3 and blockchain thecnology!</h3>
            <a href="https://github.com/klebertech" target="_blank" rel="noreferrer" className="text-green-600 border-2 border-green-600 px-8 py-2 hover:border-slate-100 hover:text-slate-100">Checkout my Github</a>
          </div>
        </section>
        <section id="about">

        </section>
        <footer className="h-12 w-full fixed bottom-0 self-end">
          <div className="flex flex-wrap items-center h-full justify-evenly lg:justify-end lg:gap-6 lg:mr-12">
            <a href="https://github.com/klebertech" target="_blank" rel="noreferrer">
              <img
                src="./images/github.png"
                alt="Kleber"
                className="w-8 text-white" />
            </a>
            <a href="mailto:kleberst88@gmail.com" target="_blank" rel="noreferrer">
              <img
                src="./images/gmail.png"
                alt="Kleber"
                className="w-8 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/kleberstavares/" target="_blank" rel="noreferrer">
              <img
                src="./images/linkedinwhite.png"
                alt="Kleber"
                className="w-8 text-white" />
            </a>
          </div>
        </footer>
      </main>
    );
  }
}
