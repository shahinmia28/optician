import "./admin.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Admin = (props) => {
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("");

  return (
    <div className="admin">
      <div className="login-form">
        <form>
          <input
            className="form-control"
            type="admin"
            name="admin"
            placeholder="admin"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
          ></input>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Link
            to={
              password === "123" && admin === "shahin"
                ? "/ds1fgh64d8fas68g7487/admin_page"
                : "/"
            }
          >
            <input type="submit" className="btn btn-info" value="submit" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Admin;
