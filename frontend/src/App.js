import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AddCategory from "./components/AddCategory";
import UpdateCategory from "./components/UpdateCategory";
import DeleteCategory from "./components/DeleteCategory";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="/categories/:id/update" element={<UpdateCategory />} />
          <Route path="/categories/:id/delete" element={<DeleteCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
