import styles from "./MainContent.module.css";
import MenCatergory from "./categories/men/MenCatergory";
import WomenCatergory from "./categories/women/WomenCatergory";
import KidsCatergory from "./categories/kids/KidsCatergory";
import WinterCatergory from "./categories/winter wear/WinterCatergory";
import AccessoriesCatergory from "./categories/accessories/AccessoriesCatergory";
import CategoriesCard from "../Cards/CategoriesCard";
import menimg from "../Components/images/men Image.avif";
import womenimg from "../Components/images/women image.avif";
import kidsimg from "../Components/images/kids image.avif";
import winterimg from "../Components/images/winter image.jpg";
import accimg from "../Components/images/accessories.avif";
const MainContent = ({ user, selectedCategory, setSelectedCategory }) => {
  const clothingData = [
    {
      id: "1",
      name: "Men",
      image: menimg,
      component: <MenCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "Women",
      image: womenimg,
      component: <WomenCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "3",
      name: "Kids",
      image: kidsimg,
      component: <KidsCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "4",
      name: "Winter Collection",
      image: winterimg,
      component: <WinterCatergory onBack={() => setSelectedCategory(null)} />,
    },
  ];
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* <Header user={user} setSelectedCategory={setSelectedCategory} /> */}
      <main className={styles.mainContent}>
        {selectedCategory ? (
          selectedCategory
        ) : (
          <>
            <h1>Welcome {user.name} , what are you looking for? </h1>
            <div className={styles.product_list}>
              {clothingData.map((item) => (
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
    </>
  );
};

export default MainContent;
