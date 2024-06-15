import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="OUR STORY" />
    </>
  );
}

export default App;
