import { useParams, useNavigate } from "react-router-dom";
import todoAPI from "../api/todoAPI";
import { Alert, Button } from "react-bootstrap";
import "../App.css";

const DeleteCategory = () => {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate("/");
  };

  const deleteCategory = async () => {
    const data = await todoAPI.deleteCategory(params.id);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="forms">
      <h1>Delete Category</h1>
      <Alert variant="danger">
        Are you sure you want to delete this category?
      </Alert>
      <Button variant="danger" type="submit" onClick={deleteCategory}>
        Yes
      </Button>
      <Button variant="secondary" type="submit" onClick={cancelDelete}>
        No
      </Button>
    </div>
  );
};

export default DeleteCategory;
