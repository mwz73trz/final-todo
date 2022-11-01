import { useNavigate } from "react-router-dom";
import todoAPI from "../api/todoAPI";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const AddCategory = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = {
      name: e.target.elements["name"].value,
      tasks: [],
    };

    const data = await todoAPI.addCategory(categoryData);
    if (data) {
      navigate("/");
    }
  };

  return (
    <Form className="forms" onSubmit={handleSubmit} method="POST">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Category Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddCategory;
