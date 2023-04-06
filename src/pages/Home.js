import React from 'react'
import Products from '../components/Products'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Hero/>
      <h1 className="text-4xl font-bold text-center text-gray-900 sm:py-10 md:py-12">Top Products</h1>

      <Products/>
    </div>
  )
}

export default Home