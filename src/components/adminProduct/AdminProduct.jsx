import "./adminProduct.scss";
import SearchBar from "../searchBar/SearchBar";
import AdminProductList from "../adminProductList/AdminProductList";
import AddForm from "../addProducts/AddForm";

const AdminProduct = (props) => {
  const delateProduct = (id) => {
    props.delateProduct(id);
  };
  return (
    <div className="adminProduct">
      <div className="addProduct-section">
        <AddForm addProductItem={props.addItem} />
      </div>
      <div className="search-section">
        <SearchBar />
      </div>
      <div className="productList-section">
        <AdminProductList
          products={props.products}
          delateProduct={delateProduct}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
