import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";
const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt={item.title} />
          </div>

          <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "monospace" }}>
              <span>Item:</span> {item.title}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span>Description:</span> {item.description}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span>Price:</span> ${item.price}
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </>
  );
};

export default ItemDetail;
