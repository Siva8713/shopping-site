import { useState } from "react";
import CategoriesCard from "../../../Cards/CategoriesCard";
import styles from "../../MainContent.module.css";
import Tops from "./Tops";
import BottomWear from "./BottomWear";
import tops from "../../images/Women/tops/set-printed-midi-dress_503750-9272.jpg";
import Bottom from "../../images/Women/bottoms/Pallazos.jpg";
import footwear from "../../images/Women/footwear/f1.avif";
import WFootwear from "./WFootwear";
export default function WomenCatergory({ onBack }) {
  const womenCatergories = [
    {
      id: "1",
      name: "Tops",
      image: tops,
      component: <Tops onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "Bottom Wear",
      image: Bottom,
      component: <BottomWear onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "3",
      name: "Footwear",
      image: footwear,
      component: <WFootwear onBack={() => setSelectedCategory(null)} />,
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
            {womenCatergories.map((item) => (
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
