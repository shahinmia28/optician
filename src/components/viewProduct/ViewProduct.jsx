import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./viewProduct.scss";

const ViewProduct = () => {
  const product = useLocation().state.product;
  const { id, title, rPrice, discount, image, docs } = product;
  const sPrice = rPrice - (discount / 100) * rPrice;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = sPrice * quantity;

  return (
    <div className="view ">
      <div className="container card-details">
        <div className="item  row m-md-5">
          <div className="col-lg-3 col-12 image">
            <div className="title-img">
              <img src={image} alt={id} />
            </div>
            <div className="extra-img">
              <img src={image} alt={id} />
              <img src={image} alt={id} />
              <img src={image} alt={id} />
            </div>
          </div>
          <div className="col-lg-6 col-12  details">
            <div className="title">
              <h1>{title}</h1>
              <br />
              <p className="text-muted">{docs}</p>
            </div>

            <br />
            <div className="price">
              <h5 className="sale-price">৳{totalPrice}</h5>
              <div className="regular-price text-muted">
                <span className="price">৳{rPrice}</span>
                <span className="discount"> -{discount}%</span>
              </div>
            </div>
            <br />
            <div className="quantity d-flex">
              <small className="text-muted">Quantity</small>
              <div className="select-quantity d-flex">
                <i
                  className="fa-solid fa-minus"
                  onClick={(e) => {
                    quantity === 1
                      ? setQuantity(quantity)
                      : setQuantity(quantity - 1);
                  }}
                ></i>
                <span>{quantity}</span>
                <i
                  className="fa-solid fa-plus"
                  onClick={(e) => setQuantity(quantity + 1)}
                ></i>
              </div>
            </div>
            <br />
            <div className="purchase d-flex">
              <button className="btn btn-info">Buy Now</button>
              <button className="btn btn-primary">Add to Card</button>
            </div>
          </div>
          <div className="col-lg-3 col-12  location">
            <div className="delivery">
              <span className="text-muted small">Delivery</span>
              <div className="address d-flex">
                <i className="fa-regular fa-compass text-muted"></i>
                <span>Dhaka, Dhaka North, Banani Road, B anani Road</span>
              </div>
              <br />
              <div className="home-delivery">
                <div className="delivery-title d-flex ">
                  <i className="fa-solid fa-truck text-muted"></i>
                  {/* <h6>হোম ডেলিভারি</h6> */}
                  <h6>Home delivery</h6>

                  <br />
                </div>

                <div className="delivery-time text-muted d-flex">
                  <span> 4 - 6 day (s)</span>
                  <span>৳50</span>
                </div>
              </div>
              <br />
              <div className="case d-flex">
                <i className="fa-solid fa-sack-dollar text-muted"></i>
                {/* <h6>ক্যাশ অন ডেলিভারি রয়েছে</h6> */}
                <h6>Case on delivery available</h6>
              </div>
            </div>
            <br />

            <div className="services small">
              <span className="text-muted">Services</span>
              <div className="return d-flex">
                <i className="fa-solid fa-arrow-rotate-left text-muted"></i>
                {/* <h6>৭ দিনে রিটার্ন</h6> */}
                <h6>7 days return</h6>
              </div>
              <br />
              <div className="warranty d-flex">
                <i className="fa-solid fa-ban text-muted"></i>
                {/* <h6>ওয়ারেন্টি নেই</h6> */}
                <h6>No warranty</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
