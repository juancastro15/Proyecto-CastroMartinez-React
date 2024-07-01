import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero={true}>
        <IoBagOutline color="black" size={40} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
