// src/pages/ShoppingCartPage.js
import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/cartItem';

const ShoppingCartPage = ({ cart, setCart }) => {
  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Header cartItemCount={totalItems} />
      <div className="shopping-cart">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
        <div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
        </div>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
