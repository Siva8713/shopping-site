// src/components/MenShirts.js
import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import g1 from "../../images/kids/girls/1.jpg";
import g2 from "../../images/kids/girls/2.jpg";
import g3 from "../../images/kids/girls/3.jpg";

const Girls = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const girldresses = [
    {
      id: 1,
      description: "Frocks",
      price: 1299,
      image_url: g1,
    },
    {
      id: 2,
      description: "Frocks",
      price: 799,
      image_url: g2,
    },
    {
      id: 3,
      description: "Frocks",
      price: 1049,
      image_url: g3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Shirts Collection</h1>
      <div className={styles.product_list}>
        {girldresses.map((shirt) => (
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

export default Girls;
