import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-800 py-12  md:py-52">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">The Only Place To</span>{" "}
            <span className="block text-indigo-400 xl:inline">SHOP & LOL</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          Welcome to our ecommerce website, where you'll find everything you need for a convenient and enjoyable shopping experience. Browse our vast selection of high-quality products, from the latest fashion trends to cutting-edge technology and beyond. 
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Hero