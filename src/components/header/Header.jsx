import "./header.scss";
import { Link } from "react-router-dom";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "header active" : "header"}>
      <div className="wrapper row container-fluid ">
        <div className="left col-10 d-flex m-auto">
          <div className="logo">
            <Link to={"/"}>
              <h1>Optician.</h1>
            </Link>
          </div>

          <div className="phone mx-3 my-auto d-none d-md-flex">
            <span>
              <i className="fa-solid fa-mobile-screen mx-1"></i>
              +88017 7729 6933
            </span>
          </div>

          <div className="email d-none d-md-flex my-auto ">
            <span>
              <i className="fa-solid fa-envelope-open mx-1"></i>
              contact.shahinmia@gmail.com
            </span>
          </div>
        </div>

        <div className="right col-2 d-flex m-auto">
          <div
            className="toggle"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
