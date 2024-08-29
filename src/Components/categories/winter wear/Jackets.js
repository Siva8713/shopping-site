// src/components/MenShirts.js
import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import j1 from "../../images/winterwear/jackets1.webp";
import j2 from "../../images/winterwear/jackets2.webp";
import j3 from "../../images/winterwear/jackets3.webp";

const Jackets = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const jackets = [
    {
      id: 1,
      description: "Brown Jacket",
      price: 1299,
      image_url: j1,
    },
    {
      id: 2,
      description: "Green Jacket",
      price: 799,
      image_url: j2,
    },
    {
      id: 3,
      description: "Blue and grey Jacket",
      price: 1049,
      image_url: j3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Shirts Collection</h1>
      <div className={styles.product_list}>
        {jackets.map((shirt) => (
          <div key={shirt.id} className={styles.product_item}>
            <img src={shirt.image_url} alt={shirt.description} />
            <h2>{shirt.description}</h2>
            <p>Price: ₹{shirt.price}</p>
            <button onClick={() => addToCart(shirt)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Jackets;
