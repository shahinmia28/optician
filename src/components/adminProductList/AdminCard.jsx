import { Link } from "react-router-dom";
import "./adminProductList.scss";

const AdminCard = (props) => {
  const { id, title, rPrice, discount, image, docs } = props.product;
  const sPrice = rPrice - (discount / 100) * rPrice;

  const delateProduct = (id) => {
    props.delateProduct(id);
  };

  return (
    <div className="card-item row" key={id}>
      <div className="col-3 image">
        <img src={image} alt={image} />
      </div>
      <div className="col-7 description">
        <div className="title">
          <h3>{title}</h3>
          <p className="text-muted">{docs}</p>
        </div>

        <div className="price">
          <h5 className="sale-price">৳{sPrice}</h5>
          <div className="regular-price text-muted">
            <span className="price">৳{rPrice}</span>
            <span className="discount"> -{discount}%</span>
          </div>
        </div>
      </div>
      <div className="col-2 control d-flex">
        <Link
          to={"/ds1fgh64d8fas68g7487/edit"}
          state={{ product: props.product }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>

        <i
          className="fa-solid fa-trash-can"
          onClick={() => delateProduct(id)}
        ></i>
      </div>
    </div>
  );
};

export default AdminCard;
