import React, { useState } from "react";
import categoriesData from "../Database/users/categories.json"; // Adjust the path as necessary
import Shirts from "./categories/men/shirts";
import Jeans from "./categories/men/Jeans";
import Tshirts from "./categories/men/Tshirt";
import Footwear from "./categories/men/Footwear";
import BottomWear from "./categories/women/BottomWear";
import Tops from "./categories/women/Tops";
import WFootwear from "./categories/women/WFootwear";
import Boys from "./categories/kids/Boys";
import Girls from "./categories/kids/Girls";
import Jackets from "./categories/winter wear/Jackets";
import Scarfs from "./categories/winter wear/scarfs";
import Sweaters from "./categories/winter wear/sweaters";

const componentsMap = {
  Shirts,
  Jeans,
  Tshirts,
  Footwear,
  BottomWear,
  Tops,
  WFootwear,
  Boys,
  Girls,
  Jackets,
  Scarfs,
  Sweaters,
};

const Sidebar = ({ setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState({});

  const toggleDropdown = (category) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleCategoryClick = (subcategory) => {
    if (typeof subcategory === "object" && subcategory.component) {
      const Component = componentsMap[subcategory.component];
      setSelectedCategory(
        <Component onBack={() => setSelectedCategory(null)} />
      );
    }
  };

  return (
    <aside style={styles.sidebar}>
      <h2>Categories</h2>
      <ul style={styles.list}>
        {Object.entries(categoriesData).map(([key, category]) => (
          <li key={key} style={styles.listItem}>
            <button
              onClick={() => toggleDropdown(key)}
              style={styles.dropdownButton}
            >
              {category.label}
            </button>
            {isOpen[key] && (
              <ul style={styles.subList}>
                {category.subcategories.map((subcategory, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategoryClick(subcategory)}
                  >
                    {typeof subcategory === "string"
                      ? subcategory
                      : subcategory.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRight: "1px solid #ddd",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  dropdownButton: {
    background: "none",
    border: "none",
    padding: "10px 0",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  subList: {
    listStyleType: "none",
    paddingLeft: "20px",
    marginTop: "5px",
  },
};

export default Sidebar;
