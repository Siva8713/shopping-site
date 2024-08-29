// src/components/MenShirts.js
import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import boys1 from "../../images/kids/boys/1.avif";
import boys2 from "../../images/kids/boys/2.avif";
import boys3 from "../../images/kids/boys/3.jpg";

const Boys = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const boydresses = [
    {
      id: 1,
      description: "Dress1",
      price: 1399,
      image_url: boys1,
    },
    {
      id: 2,
      description: "Dress2",
      price: 1799,
      image_url: boys2,
    },
    {
      id: 3,
      description: "Dress 3",
      price: 1329,
      image_url: boys3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Shirts Collection</h1>
      <div className={styles.product_list}>
        {boydresses.map((shirt) => (
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

export default Boys;
