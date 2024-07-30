import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, TextField } from "@mui/material";

const Checkout = () => {
  const navigate = useNavigate(); // ---> es una funcion

  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(""); // truthy y falsy

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`Awesome, Your purchase ticket number is ${res.id} `);
      })
      .catch()
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Please complete your information to proceed with the purchase</h1>
      {orderId ? (
        <h2>Awesome, Your purchase ticket number is : {orderId}</h2>
      ) : (
        <form
          onSubmit={envioDeFormulario}
          style={{
            margin: "50px",
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "20px",
          }}
        >
          <TextField
            variant="outlined"
            type="text"
            label="Name"
            placeholder="Write your Name"
            name="nombre"
            onChange={capturarData}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Email"
            placeholder="example@goat.com"
            name="email"
            onChange={capturarData}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Phone"
            placeholder="+341234567"
            name="telefono"
            onChange={capturarData}
          />

          <Button type="submit" variant="contained">
            Pay
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
