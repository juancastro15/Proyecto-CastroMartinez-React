import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  //const [error, setError] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  const addProducts = () => {
    let productsCollection = collection(db, "products");

    products.forEach((elemento) => {
      addDoc(productsCollection, elemento);
    });
  };

  return (
    <div>
      {
        <Button variant="contained" onClick={addProducts}>
          Add Product
        </Button>
      }
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
