import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'FANCY', price: 100.00 },
    { id: 2, name: 'CLOTH', price: 150.00 },
    { id: 3, name: 'GROCERY', price: 20.00 },
     { id: 4, name: 'WATCH', price: 100.00 },
    { id: 5, name: 'SLIPPER', price: 159.00 },
    { id: 6, name: 'BAGS', price: 209.00 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

   return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
    
      <div className="items-list">
       
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <div className="item-details">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart">
     <button>CART</button>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <div className="item-details">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-price">
        <h2>Total Price: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
