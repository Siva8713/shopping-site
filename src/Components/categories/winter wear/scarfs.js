import React, { useContext } from "react";
import styles from "../men/dresses.module.css";
import { CartContext } from "../../../CartContext";
import s1 from "../../images/winterwear/scarfs1.webp";
import s2 from "../../images/winterwear/scarfs2.webp";
import s3 from "../../images/winterwear/scarfs3.webp";

const Scarfs = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const scarfs = [
    {
      id: 1,
      description: "Scarfs women",
      price: 299,
      image_url: s1,
    },
    {
      id: 2,
      description: "scarfs women",
      price: 399,
      image_url: s2,
    },
    {
      id: 3,
      description: "Scarfs men",
      price: 149,
      image_url: s3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Scarf's Collection</h1>
      <div className={styles.product_list}>
        {scarfs.map((shirt) => (
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

export default Scarfs;
