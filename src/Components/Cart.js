import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img src={item.image_url} alt={item.description} />
                <div className={styles.data}>
                  <h3>{item.description}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalAmount}>
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
