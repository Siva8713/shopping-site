import React from "react";
import styles from "./CategoriesCard.module.css";

const CategoriesCard = ({ name, image, onClick }) => {
  return (
    <div className={styles.product_item} onClick={onClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default CategoriesCard;
