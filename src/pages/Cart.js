import React from 'react'
import { useCartContext } from '../context/cartcontext';
import CartContent from '../components/CartContent';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, totalAmount,  totalItems,  shippingFee } = useCartContext()
  
  if(cart.length < 1){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your cart is empty.</h2>
          <p className="text-gray-500 text-lg">Please add some items to your cart.</p>
          <Link to='/products' className='text-lg text-blue-600 underline'>Add product to cart</Link>
        </div>
      </div>
    );
  }

  return (
    <div class="container mx-auto mt-10 h-screen">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{totalItems} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
        </div>
        {cart.map((item) => {
        return <CartContent key={item.id} item={item}></CartContent>;
      })}

        <Link to="/products" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items {totalItems}</span>
          <span class="font-semibold text-sm">{totalAmount} TAKA</span>
        </div>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Shipping</span>
          <span class="font-semibold text-sm">{shippingFee} TAKA</span>
        </div>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{totalAmount+shippingFee} TAKA</span>
          </div>
          <button onClick={()=>alert("checked out")} class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Cart