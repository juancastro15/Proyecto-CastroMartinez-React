const ItemList = ({ greeting }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemList;
