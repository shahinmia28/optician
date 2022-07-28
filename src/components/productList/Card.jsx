import "./productList.scss";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { id, title, rPrice, discount, image, docs } = props.product;
  const sPrice = rPrice - (discount / 100) * rPrice;

  return (
    <div className="card-items col-6 col-md-4 col-lg-3">
      <div className="card">
        <Link
          to={{
            pathname: `/view/${id}`,
          }}
          state={{ product: props.product }}
        >
          <div className="img-holder">
            <img src={image} className="card-img-top" alt={id}></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{docs}</p>
            <h5 className="sale-price">৳{sPrice}</h5>
            <div className="regular-price">
              <span className="price">৳{rPrice}</span>
              <span className="discount"> -{discount}%</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
