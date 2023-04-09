import React from "react";
import { Link } from "react-router-dom";
import CardLoading from "./CardLoading";

const ProductCard = ({product}) => {
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
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">
            {product.description}
          </p>
          <p className="text-gray-700 text-base font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;