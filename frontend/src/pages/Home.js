import { useEffect, useState } from "react";
import todoAPI from "../api/todoAPI";
import Categories from "../components/Categories";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const data = await todoAPI.getCategories();
    setCategories(data ? data : []);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const renderCategories = () => {
    return categories.map((category, index) => {
      return <Categories category={category} />;
    });
  };

  return (
    <div className="home-side">
      <div className="inner-side">
        <h4>Categories</h4>
        {renderCategories()}
      </div>
    </div>
  );
};

export default Home;
