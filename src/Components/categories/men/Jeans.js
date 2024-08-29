import React, { useContext } from "react";
import styles from "./dresses.module.css";
import { CartContext } from "../../../CartContext";
import jean1 from "../../images/men/jeans/jeans1.avif";
import jean2 from "../../images/men/jeans/jeans2.avif";

const Jeans = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const jeansData = [
    {
      id: 1,
      description: "Black Acid fade Jeans",
      price: 1299,
      image_url: jean1,
    },
    {
      id: 2,
      description: "Blue Jeans",
      price: 1299,
      image_url: jean2,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Jeans Collection</h1>
      <div className={styles.product_list}>
        {jeansData.map((shirt) => (
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

export default Jeans;
