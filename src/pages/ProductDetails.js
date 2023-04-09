import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/productscontext';
import Loading from './Loading';
import AddToCarrt from '../components/AddToCarrt';

function ProductDetails() {
  
  const {id} = useParams();
  const url = "https://course-api.com/react-store-single-product?id=";
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  if (singleProductLoading) {
    return <Loading />;
  }
  if (singleProductError) {
    return <h1>error</h1>;
  }
console.log(singleProduct)

  return (
    <div className="flex min-h-screen flex-col md:flex-row mx-auto max-w-5xl px-4 py-6">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="w-full md:w-2/3 rounded-lg shadow-lg" src='https://picsum.photos/200/300' />
      </div>
      <div className="w-full md:w-1/2 px-4 py-6 flex flex-col  justify-center items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">{singleProduct.name}</h2>
          <p className="text-gray-700">{singleProduct.description}</p>
          <p className="text-gray-700 font-bold my-4">{singleProduct.price} TAKA</p>
        <AddToCarrt item={singleProduct}/>
        </div>
        
      </div>
    </div>
  );
};


export default ProductDetails