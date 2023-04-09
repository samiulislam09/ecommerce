import React from 'react'
import Products from '../components/Products'

function AllProducts() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-900 sm:py-10 md:py-12">Products</h1>
      <Products/>
    </div>
  )
}

export default AllProducts