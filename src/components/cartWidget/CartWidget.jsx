import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext); //
  let total = getTotalItems();
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero={true}>
        <IoBagOutline color="black" size={40} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
