import CartWidget from "../cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link to="/">
            <img
              src={logo}
              alt="logo de la empresa"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Link>

          <ul className="categories" style={{ display: "flex", gap: "20px" }}>
            <Link to="/" style={{ listStyle: "none" }}>
              All
            </Link>
            <Link to="/category/Coats" style={{ listStyle: "none" }}>
              Coats
            </Link>
            <Link to="/category/Jerseys" style={{ listStyle: "none" }}>
              Jerseys
            </Link>
            <Link to="/category/Shorts" style={{ listStyle: "none" }}>
              Shorts
            </Link>
            <Link to="/category/Hats" style={{ listStyle: "none" }}>
              Hats
            </Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
