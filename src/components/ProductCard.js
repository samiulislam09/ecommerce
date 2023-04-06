import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6 p-4">
      <div className="w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://source.unsplash.com/random/400x200"
          alt="Product"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Product Title</div>
          <p className="text-gray-700 text-base">
            A brief description of the product goes here.
          </p>
          <p className="text-gray-700 text-base font-bold">$99.99</p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;