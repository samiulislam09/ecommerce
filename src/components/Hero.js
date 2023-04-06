import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-800 py-12  md:py-52">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">The Only Place To</span>{" "}
            <span className="block text-indigo-400 xl:inline">SHOP & LOL</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            consequatur, unde, explicabo dolor molestias deserunt inventore
            adipisci omnis voluptatum debitis magnam nesciunt!
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Hero