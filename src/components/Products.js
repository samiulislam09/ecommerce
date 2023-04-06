import React from 'react'
import ProductCard from './ProductCard'
import { useProductsContext } from '../context/productscontext'
import Loading from '../pages/Loading';

function Products() {
  const {products, productsLoading, productsError}  = useProductsContext();
  console.log(products)
  if(productsLoading){
    return <Loading />
  }
  return (
      <div className="flex flex-wrap lg:w-11/12 mx-auto">
        {products.map((product)=>{
          return (
            <ProductCard id={product.id} product={product}/>
          )
        })}
    </div>
  )
}

export default Products