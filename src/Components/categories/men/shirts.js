// src/components/MenShirts.js
import React, { useContext } from "react";
import styles from "./dresses.module.css";
import { CartContext } from "../../../CartContext";
import shirt1 from "../../images/men/shirts/Classic White Cotton Shirt.avif";
import shirt3 from "../../images/men/shirts/Slim Fit Black Dress Shirt.jpg";
import shirt5 from "../../images/men/shirts/Denim Chambray Shirt.jpg";

const Shirts = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const shirtsData = [
    {
      id: 1,
      description: "Classic White Cotton Shirt",
      price: 799,
      image_url: shirt1,
    },
    {
      id: 2,
      description: "Slim Fit Black Dress Shirt",
      price: 1299,
      image_url: shirt3,
    },
    {
      id: 3,
      description: "Denim Chambray Shirt",
      price: 1499,
      image_url: shirt5,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Shirts Collection</h1>
      <div className={styles.product_list}>
        {shirtsData.map((shirt) => (
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

export default Shirts;
