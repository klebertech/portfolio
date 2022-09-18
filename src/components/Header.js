import React from 'react'

export default function Header() {
  return (
    <div className="bg-cyan-800">
      <div className="flex h-40 lg:h-20 justify-center lg:justify-start lg:ml-20">
        <img
          src="./images/profile.png"
          alt="Kleber"
          className="absolute border-4 border-green-400/75 rounded-full mt-16 w-36 2xl:w-60 lg:mt-30 2xl:mt-12" />
      </div>
      <section className=" bg-sky-900 text-center">
          <nav className="fixed top-0 h-12 w-full mt-2">
            <ul className="flex flex-wrap flex-row justify-center md:justify-end sm:mr-12 gap-16 mt-4 text-slate-200">
              <li className="hover:text-green-400">Home</li>
              <li className="hover:text-green-400">About</li>
              <li className="hover:text-green-400">Contact</li>
            </ul>
          </nav>
        </section>
    </div>
  )
}
