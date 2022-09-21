import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <main className="flex flex-wrap flex-col h-screen bg-gradient-to-t from-cyan-500 to-blue-600">
        <Header />
        <section id="initial" className="">
          <div className="mt-20 w-3/4 sm:mt-46 xl:mt-6 sm:w-1/2 mx-auto xl:ml-auto ">
            <h1 className="text-xl font-bold text-green-400 mb-4">
               {"<Kleber Tavares/>"}
            </h1>
            <h2 className="text-6xl 2xl:text-6xl font-extrabold text-slate-50 mb-4">Web Developer</h2>
            <h3 className="text-md 2xl:text-xl font-bold text-slate-300/50 mb-10">I'm a software engineer based in Brazil, building professional things on the web (on the free time playing on the web3). Currently focused in Javascript stacks (React and node for now).</h3>
            <a href="https://github.com/klebertech" target="_blank" rel="noreferrer" className="text-slate-50 border-2 border-slate-50 px-8 py-2 hover:border-slate-600 hover:text-slate-600">Checkout my Github</a>
          </div>
          <div className="flex flex-wrap flex-col w-72 sm:w-96 h-20 mx-auto mt-10">
            <div className=" border-2 border-slate-300 rounded-lg w-full h-20 ml-auto pb-12">
              <div className="flex flex-wrap flex-row justify-between">
                <div className="font-bold">
                  <h1 className="text-white ml-4">Stacks</h1>
                </div>
                <div className="flex flex-wrap flex-row">
                  <div className="bg-yellow-600 w-2 h-2 mt-2 mr-2 rounded"></div>
                  <div className="bg-green-600 w-2 h-2 mt-2 mr-2 rounded"></div>
                  <div className="bg-red-600 w-2 h-2 mt-2 mr-2 rounded"></div>
                </div>
              </div>
              <hr />
              <div className="flex flex-wrap flex-row justify-evenly mt-2">
                <img
                src="./images/react-white.png"
                alt="Linkedin"
                className="w-8 text-white" />
                <img
                src="./images/node-white.png"
                alt="Linkedin"
                className="w-8 text-white" />
                <img
                src="./images/mysql-white.png"
                alt="Linkedin"
                className="w-8 text-white" />
                <img
                src="./images/html-white.png"
                alt="Linkedin"
                className="w-8 text-white" />
                <img
                src="./images/css-white.png"
                alt="Linkedin"
                className="w-8 text-white" />
              </div>
            </div>
          </div>
        </section>
        <section id="about">

        </section>
        <Footer />
      </main>
    );
  }
}
