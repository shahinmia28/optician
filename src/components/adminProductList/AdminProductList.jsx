import AdminCard from "./AdminCard";
import "./adminProductList.scss";

const AdminProductList = (props) => {
  const delateProduct = (id) => {
    props.delateProduct(id);
  };

  return (
    <div className="adminProductList">
      <div className="container">
        <div className="card-list">
          {props.products.map((product, index) => {
            return (
              <AdminCard
                key={index}
                product={product}
                delateProduct={delateProduct}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminProductList;
