import { useState } from "react";
import CategoriesCard from "../../../Cards/CategoriesCard";
import styles from "../../MainContent.module.css";
import Jackets from "./Jackets";
import Scarfs from "./scarfs";
import Sweaters from "./sweaters";
import jackets from "../../images/winterwear/jackets1.webp";
import scarfs from "../../images/winterwear/scarfs1.webp";
import sweaters from "../../images/winterwear/sweaters1.webp";
export default function WomenCatergory({ onBack }) {
  const winterCatergories = [
    {
      id: "1",
      name: "Jackets",
      image: jackets,
      component: <Jackets onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "Scarfs",
      image: scarfs,
      component: <Scarfs onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "3",
      name: "Sweaters",
      image: sweaters,
      component: <Sweaters onBack={() => setSelectedCategory(null)} />,
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
            {winterCatergories.map((item) => (
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
