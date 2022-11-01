import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import todoAPI from "../api/todoAPI";
import Categories from "../components/Categories";
import { GrAdd } from "react-icons/gr";

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
        <br />
        <Link to="/categories/add">
          <GrAdd />
        </Link>
      </div>
    </div>
  );
};

export default Home;
