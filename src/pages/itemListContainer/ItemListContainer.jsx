import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting, a, b, c, d }) => {
  const [numero, setNumero] = useState(0);
  const [misProductos, setMisProductos] = useState([]);
  const [nombre, setNombre] = useState("pepito");

  useEffect(() => {
    console.log("me ejecute");
    const productos = [
      {
        nombre: "Barcelona",
        precio: 49.99,
        categoria: "Jersey",
      },
      {
        nombre: "Real Madrid",
        precio: 69.99,
        categoria: "Coat",
      },
      {
        nombre: "Chelsea",
        precio: 49.99,
        categoria: "Hat",
      },
    ];

    setMisProductos(productos);
  }, [nombre]); // array de dependencias

  const sumar = () => {
    setNumero(numero + 1);
  };

  const cambiarNombre = () => {
    setNombre("maria");
  };

  return <ItemList greeting={greeting} />;
};

export default ItemListContainer;
