import React from 'react'
import { useCartContext } from '../context/cartcontext';

function CartContent({item}) {
  const { removeItem } = useCartContext();

  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={item.image} alt="" />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{item.name}</span>
              <span class="w-1/5 font-semibold text-sm">{item.price} TAKA</span>
              
            </div>
          </div>
          <button onClick={()=>removeItem(item.id)} class="font-semibold hover:text-red-500 text-gray-500 text-md my-auto  float-right">Remove</button>
        </div>
  )
}

export default CartContent