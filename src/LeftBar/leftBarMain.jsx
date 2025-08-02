import React from 'react';
import { useCart } from '../CartContext'; // adjust path as needed
import './leftBarMain.css'

function LeftBarMain(){
  const { cartItems, clearCart, getTotalPrice } = useCart();

  const handleOrder = () => {
    clearCart();
    alert("Order is placed");
  }

  return(
    <div className='menu'>
      <ul>
        <li><a href="#shop">Shop Supplements</a></li>
        <li><a href="#plans">Diet Plans</a></li>
        <li><a href="#trainers">Hire a Trainer</a></li>
        <li><a href="#classes">Group Classes</a></li>
        <li><a href="#equipment">Gym Equipment</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      
      {/* Cart Section - wrapped in div for easy styling */}
      <div className="cart-section">
        <h3>Cart</h3>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                Product ID: {item.id}, Price: {item.price}rs
              </div>
            ))}
            <div className="cart-total">
              <strong>Total: {getTotalPrice()}rs</strong>
            </div>
            <button className="order-button" onClick={handleOrder}>
              Order
            </button>
          </div>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  )
}

export default LeftBarMain;
