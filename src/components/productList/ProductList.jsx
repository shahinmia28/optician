import "./productList.scss";
import { Card } from "./Card";
const ProductList = (props) => {
  return (
    <div className="productList my-4 container">
      <div className="row">
        {props.products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
