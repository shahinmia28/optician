import "./intro.scss";
import TopInfo from "../topInfo/TopInfo";
import TopSlider from "../topSlider/TopSlider";
import SearchBar from "../searchBar/SearchBar";
import ProductList from "../productList/ProductList";
const Intro = (props) => {
  return (
    <div className="intro">
      <div className="wrapper row d-flex">
        <div className="left col-12 col-md-6">
          <TopSlider />
        </div>
        <div className="right col-12 col-md-6">
          <TopInfo />
        </div>
      </div>
      <SearchBar />
      <div className="products">
        <ProductList products={props.products} />
      </div>
    </div>
  );
};

export default Intro;
