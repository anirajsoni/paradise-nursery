// src/pages/ProductListingPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, thumbnail: 'path/to/image1.jpg' },
  { id: 2, name: 'Snake Plant', price: 30, thumbnail: 'path/to/image2.jpg' },
  // Add more plants as needed
];

const ProductListingPage = ({ cart, setCart }) => {
  const addToCart = (plant) => {
    setCart(prevCart => {
      const existingPlant = prevCart.find(item => item.id === plant.id);
      if (existingPlant) {
        return prevCart.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  return (
    <div>
      <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <div className="product-listing">
        {plants.map(plant => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
