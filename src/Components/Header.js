import React, { useState } from "react";
import styles from "./Header.module.css";
import Cart from "./Cart";

const Header = ({ user, setSelectedCategory }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const openUserInfo = () => {
    setShowUserInfo(true);
  };

  const closeUserInfo = () => {
    setShowUserInfo(false);
  };

  const goToHome = () => {
    setSelectedCategory(null); // Reset selected category
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Infy Shopping POC</h1>
        <p>Find Your Fashion!</p>
      </div>
      <div className={styles.navButtons}>
        <div className={styles.userSection}>
          <span className={styles.userName} onClick={goToHome}>
            Home
          </span>
        </div>
        <div className={styles.userSection}>
          <span className={styles.userName} onClick={toggleCart}>
            Cart
          </span>
        </div>
        <div className={styles.userSection}>
          <span className={styles.userName} onClick={openUserInfo}>
            Profile
          </span>
        </div>
        {/* <button className={styles.button} onClick={goToHome}>
          Home
        </button>
        <button className={styles.button} onClick={toggleCart}>
          Cart
        </button> */}
      </div>

      {showCart && (
        <div className={styles.cartOverlay}>
          <div className={styles.cartContainer}>
            <button className={styles.backButton} onClick={closeCart}>
              Back
            </button>
            <Cart />
          </div>
        </div>
      )}
      {showUserInfo && (
        <div className={styles.profileOverlay}>
          <div className={styles.profileContainer}>
            <button className={styles.backButton} onClick={closeUserInfo}>
              Back
            </button>
            <div className={styles.userInfo}>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
