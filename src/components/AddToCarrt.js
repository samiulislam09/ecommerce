import React, { useState } from 'react'
import { useCartContext } from '../context/cartcontext';
import { Link } from 'react-router-dom';

function AddToCarrt({item}) {
  const [amount, setAmount] = useState(1);
  const {addToCart} = useCartContext();

  return (
    <div>
        <Link to='/cart' onClick={()=>addToCart(item.id, amount, item)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</Link>
    </div>
  )
}

export default AddToCarrt