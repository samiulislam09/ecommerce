import React from 'react';
import { useCartContext } from '../context/cartcontext';
import { Bar, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useProductsContext } from '../context/productscontext';

const AdminDashboard = () => {
  const  {cart,  shippingFee} = useCartContext();
  const {products} = useProductsContext()

  console.log(cart);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold mb-4">Orders</h1>
          <div className='flex justify-center items-center'>
            <LineChart
            
            width={500} height={300} data={cart}>
              <XAxis dataKey="name"/>
              <YAxis dataKey='price'/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey='name' fill='#8884d8' />
              <Bar dataKey='price' fill='#82ca9d' /> 
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Line type="monotone" dataKey="name" stroke="#8884d8" />
              <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="overflow-x-auto mt-10">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border border-gray-500 px-4 py-2 text-gray-600">Product Name</th>
                  <th className="border border-gray-500 px-4 py-2 text-gray-600">Quantity</th>
                  <th className="border border-gray-500 px-4 py-2 text-gray-600">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(item=>{
                    return (
                      <tr id={item.id}>
                        <td className="border border-gray-500 px-4 py-2 text-center">{item.name}</td>
                        <td className="border border-gray-500 px-4 py-2 text-center">{item.amount}</td>
                        <td className="border border-gray-500 px-4 py-2 text-center">{item.price + shippingFee}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;