import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import leggings from "../../images/Women/bottoms/leggings.jpg";
import Palaszzo from "../../images/Women/bottoms/Pallazos.jpg";
import jeans from "../../images/Women/bottoms/jeans.avif";

const BottomWear = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const bottomwearData = [
    {
      id: 1,
      description: "Leggins",
      price: 399,
      image_url: leggings,
    },
    {
      id: 2,
      description: "Palaszzo",
      price: 799,
      image_url: Palaszzo,
    },
    {
      id: 3,
      description: "Jeans",
      price: 1329,
      image_url: jeans,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Women's Collection</h1>
      <div className={styles.product_list}>
        {bottomwearData.map((shirt) => (
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

export default BottomWear;
