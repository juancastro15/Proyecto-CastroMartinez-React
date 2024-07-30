import { Button } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button variant="contained" onClick={restar}>
        Less
      </Button>
      <h2> {contador} </h2>
      <Button variant="contained" onClick={sumar}>
        More
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Add to the Cart
      </Button>
    </div>
  );
};
