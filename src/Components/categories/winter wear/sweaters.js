// src/components/MenShirts.js
import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import s1 from "../../images/winterwear/sweaters1.webp";
import s2 from "../../images/winterwear/sweaters1.webp";
import s3 from "../../images/winterwear/sweaters1.webp";

const Sweaters = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const sweaters = [
    {
      id: 1,
      description: "Sweat shirts",
      price: 799,
      image_url: s1,
    },
    {
      id: 2,
      description: "Sweat shirts",
      price: 799,
      image_url: s2,
    },
    {
      id: 3,
      description: "Sweat shirts",
      price: 1049,
      image_url: s3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Sweaters Collection</h1>
      <div className={styles.product_list}>
        {sweaters.map((shirt) => (
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

export default Sweaters;
