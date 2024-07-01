import CounterContainer from "../../components/counter/CounetContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <h2>{item.title}</h2>
        <CounterContainer />
      </div>
    </>
  );
};

export default ItemDetail;
