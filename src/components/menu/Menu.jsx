import "./menu.scss";
import { menuList } from "../../Data";
import { Link } from "react-router-dom";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <div className="menu-wrapper">
        <ul>
          {menuList.map((list, index) => {
            return (
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                key={index}
              >
                <Link
                  to={`/${list.id}`}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {list.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
