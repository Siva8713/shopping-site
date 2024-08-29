import { useState } from "react";
import CategoriesCard from "../../../Cards/CategoriesCard";
import styles from "../../MainContent.module.css";
import boyimg from "../../images/kids/kids.avif";
import girlimg from "../../images/kids/girls.avif";
import Boys from "./Boys";
import Girls from "./Girls";
export default function KidsCatergory({ onBack }) {
  const KidsCatergories = [
    {
      id: "1",
      name: "Boys",
      image: boyimg,
      component: <Boys onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "Girls",
      image: girlimg,
      component: <Girls onBack={() => setSelectedCategory(null)} />,
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
            {KidsCatergories.map((item) => (
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
