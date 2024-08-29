import React, { useContext } from "react";
import styles from "./dresses.module.css";
import { CartContext } from "../../../CartContext";
import shoe1 from "../../images/men/shoes/biscutclr shoes.avif";
import shoe2 from "../../images/men/shoes/blackLoafers.avif";
import shoe3 from "../../images/men/shoes/boots.jpg";

const Footwear = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const FootwearData = [
    {
      id: 1,
      description: "Wood Brown Shoes",
      price: 1799,
      image_url: shoe1,
    },
    {
      id: 2,
      description: "Black Loafers",
      price: 1299,
      image_url: shoe2,
    },
    {
      id: 3,
      description: "Boots",
      price: 1499,
      image_url: shoe3,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Footwear Collection</h1>
      <div className={styles.product_list}>
        {FootwearData.map((shirt) => (
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

export default Footwear;
