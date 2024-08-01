// ItemListContainer.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let productsCollection = collection(db, "products");
      let consulta = productsCollection;

      if (name) {
        consulta = query(productsCollection, where("category", "==", name));
      }

      const res = await getDocs(consulta);
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    };

    fetchProducts();
  }, [name]);

  const addProducts = async () => {
    let productsCollection = collection(db, "products");

    for (let elemento of products) {
      await addDoc(productsCollection, elemento);
    }

    console.log("Products successfully uploaded");
  };

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
