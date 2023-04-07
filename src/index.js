import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/productscontext';
import { CartProvider } from './context/cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>

        <CartProvider>
        <App />

        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
