import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import dress1 from "../../images/Women/tops/dress1.avif";
import dress2 from "../../images/Women/tops/dress2.avif";

const Tops = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const TopsData = [
    {
      id: 1,
      description: "FLoral Blue and Pink Top",
      price: 2199,
      image_url: dress1,
    },
    {
      id: 2,
      description: "Teal Green",
      price: 2099,
      image_url: dress2,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Women's Tops Collection</h1>
      <div className={styles.product_list}>
        {TopsData.map((shirt) => (
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

export default Tops;
