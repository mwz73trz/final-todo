import { Link } from "react-router-dom";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

const Categories = (props) => {
  return (
    <div>
      {props.category.name}
      {"  "}
      <Link to={`/categories/${props.category.id}/update`}>
        <AiTwotoneEdit />
      </Link>
      {"  "}
      <Link to={`/categories/${props.category.id}/delete`}>
        <AiTwotoneDelete />
      </Link>
    </div>
  );
};

export default Categories;
