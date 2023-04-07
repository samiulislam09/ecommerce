import React from "react";
import { Link } from "react-router-dom";
import CardLoading from "./CardLoading";
import { useCartContext } from "../context/cartcontext";

const ProductCard = ({product}) => {
  const {addToCart} =  useCartContext();
  if(!product){
    return <CardLoading/>
  }
  console.log('uyrdtuyug',product)
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/12 p-4">
      <div className="w-sm rounded overflow-hidden shadow-lg">
        <Link to={"/product-details/"+product.id}>
          <img
            className="w-full h-64"
            src={product.image}
            alt="Product"
          />

        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Product Title</div>
          <p className="text-gray-700 text-base">
            A brief description of the product goes here.
          </p>
          <p className="text-gray-700 text-base font-bold">$99.99</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;