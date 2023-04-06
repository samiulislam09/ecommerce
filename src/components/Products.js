import React from 'react'
import ProductCard from './ProductCard'

function Products() {
  return (
      <div className="flex flex-wrap lg:w-11/12 items-center justify-center mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default Products