// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <h4>{item.name}</h4>
      <p>${item.price.toFixed(2)}</p>
      <div>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
