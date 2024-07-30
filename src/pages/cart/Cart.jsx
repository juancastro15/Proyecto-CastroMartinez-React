import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to remove it?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "yes",
      denyButtonText: `no`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("The product was not removed", "", "info");
      }
    });
  };

  return (
    <div className="cartContainer">
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cartItem">
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>€{elemento.price}</h2>
            <div className="cartButtons">
              <Button
                variant="contained"
                onClick={() => handleDelete(elemento.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
      <h2 className={`cartTotal ${cart.length > 0 ? "title" : "ocultar"}`}>
        Amount to pay €{total}
      </h2>
      <div className="buttonContainer">
        {cart.length > 0 && (
          <Button
            variant="outlined"
            className="clearButton"
            onClick={clearCart}
          >
            Clear
          </Button>
        )}

        <Link to="/checkout">
          <Button
            variant="contained"
            className={`checkoutButton ${
              cart.length > 0 ? "active" : "inactive"
            }`}
          >
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
