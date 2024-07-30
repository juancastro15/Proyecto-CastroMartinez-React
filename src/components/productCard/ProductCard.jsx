import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";
import "./productCard.css";

export const ProductCard = ({ title, description, price, id, img }) => {
  const eliminar = () => {
    let productColl = collection(db, "products");
    let refDoc = doc(productColl, id);
    deleteDoc(refDoc);
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component={"img"}
        s={{ height: 140, width: "100%" }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          €{price}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Link to={`/itemDetail/${id}`}>
          <Button className="moreButton" size="small" variant="outlined">
            More
          </Button>
        </Link>
        <Button
          className="deleteButton"
          size="small"
          variant="outlined"
          onClick={eliminar}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
