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
              alt="company logo"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Link>

          <ul className="categories" style={{ display: "flex", gap: "20px" }}>
            <Link to="/" className="button">
              All
            </Link>
            <Link to="/category/Scarf" className="button">
              Scarf
            </Link>
            <Link to="/category/Jerseys" className="button">
              Jerseys
            </Link>
            <Link to="/category/Shorts" className="button">
              Shorts
            </Link>
            <Link to="/category/Hats" className="button">
              Hats
            </Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
