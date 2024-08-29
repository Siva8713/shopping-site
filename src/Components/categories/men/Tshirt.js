import React, { useContext } from "react";
import styles from "./dresses.module.css";
import { CartContext } from "../../../CartContext";
import shirt1 from "../../images/men/Tshirts/white1.avif";
import shirt3 from "../../images/men/Tshirts/black2.jpg";
import shirt5 from "../../images/men/Tshirts/y3.avif";

const Tshirts = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const tshirtsData = [
    {
      id: 1,
      description: "White T-shirt",
      price: 399,
      image_url: shirt1,
    },
    {
      id: 2,
      description: "Black T-shirt",
      price: 299,
      image_url: shirt3,
    },
    {
      id: 3,
      description: "Polo T-Shirt",
      price: 459,
      image_url: shirt5,
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's T-Shirts Collection</h1>
      <div className={styles.product_list}>
        {tshirtsData.map((shirt) => (
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

export default Tshirts;
