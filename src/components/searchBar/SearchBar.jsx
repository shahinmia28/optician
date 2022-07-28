import "./searchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBar-container row">
        <div className="left col-12 col-md-6">
          <img src="../image/free delivery2.jpg" alt="" />
        </div>
        <div className="right col-12 col-md-6">
          <div className="select-category">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Select Category</option>
              <option value="metal-frame">Metal Frame</option>
              <option value="shall-frame">Shall Frame</option>
              <option value="ladies-frame">Ladies Frame</option>
            </select>
          </div>
          <div className="search">
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
              ></input>
              <button className="btn btn-light m-auto" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
