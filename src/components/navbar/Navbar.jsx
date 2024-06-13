import CartWidget from "../cartWidget/CartWidget";
import "./Navbar.css";

import logo from "../../images/logo.png";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img
        // src={logo}
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1718150058/probando/images_za8tj5.png"
        alt=""
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />

      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>All</li>
        <li style={{ listStyle: "none" }}>Coats</li>
        <li style={{ listStyle: "none" }}>Jerseys</li>
        <li style={{ listStyle: "none" }}>Shorts</li>
      </ul>

      <CartWidget />
    </div>
  );
};
