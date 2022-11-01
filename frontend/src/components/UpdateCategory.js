import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import todoAPI from "../api/todoAPI";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const UpdateCategory = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  const getCategory = async () => {
    const data = await todoAPI.getSingleCategory(params.id);
    setCategory(data);
  };

  useEffect(() => {
    getCategory();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      name: e.target.elements["name"].value,
      tasks: [],
    };

    const data = await todoAPI.updateCategory(params.id, updateData);
    setCategory(data);
    navigate("/");
  };

  const renderCategory = () => {
    if (!category) {
      return null;
    }

    return (
      <div className="forms">
        <Form onSubmit={handleSubmit} method="PUT">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={category.name} />
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </div>
    );
  };

  return <div>{renderCategory()}</div>;
};

export default UpdateCategory;
