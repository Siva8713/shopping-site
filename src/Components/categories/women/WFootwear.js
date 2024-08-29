import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import f1 from "../../images/Women/footwear/f1.avif";
import f2 from "../../images/Women/footwear/f2.avif";
import f3 from "../../images/Women/footwear/f3.avif";

const WFootwear = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const footwearData = [
    {
      id: 1,
      description: "Loafers",
      price: 899,
      image_url: f1,
    },
    {
      id: 2,
      description: " Heels",
      price: 1249,
      image_url: f2,
    },
    {
      id: 2,
      description: "Pink Shoes",
      price: 1499,
      image_url: f3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Women's Footwear Collection</h1>
      <div className={styles.product_list}>
        {footwearData.map((shirt) => (
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

export default WFootwear;
