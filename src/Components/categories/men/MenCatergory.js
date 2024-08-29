import { useState } from "react";
import CategoriesCard from "../../../Cards/CategoriesCard";
import styles from "../../MainContent.module.css";
import MenShirts from "./shirts";
import shirtimg from "../../images/men/shirts.avif";
import jeanimg from "../../images/men/jeans.avif";
import tshirtimg from "../../images/men/tshirts.avif";
import footwearimg from "../../images/men/footwear.jpg";
import Tshirts from "./Tshirt";
import Footwear from "./Footwear";
import Jeans from "./Jeans";

export default function MenCatergory({ onBack }) {
  const menCatergories = [
    {
      id: "1",
      name: "Shirts",
      image: shirtimg,
      component: <MenShirts onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "T-Shirts",
      image: tshirtimg,
      component: <Tshirts onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "3",
      name: "Footwear",
      image: footwearimg,
      component: <Footwear onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "4",
      name: "Jeans",
      image: jeanimg,
      component: <Jeans onBack={() => setSelectedCategory(null)} />,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className={styles.mainContent}>
      {selectedCategory ? (
        selectedCategory
      ) : (
        <>
          <button className={styles.backButton} onClick={onBack}>
            Back
          </button>
          <div className={styles.product_list}>
            {menCatergories.map((item) => (
              <CategoriesCard
                key={item.id}
                name={item.name}
                image={item.image}
                onClick={() => handleCategoryClick(item.component)}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
