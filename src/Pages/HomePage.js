import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

const HomePage = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div style={styles.container}>
      <Header user={user} setSelectedCategory={setSelectedCategory} />
      <div style={styles.content}>
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <MainContent
          user={user}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Footer style={styles.footers} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    display: "flex",
    flex: 1,
  },
  footers: {
    textAlign: "right",
  },
};

export default HomePage;
