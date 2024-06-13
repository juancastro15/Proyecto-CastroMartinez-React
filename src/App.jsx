import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pages/ItemListContainer";

function App() {
  const [estaMontado, setEstaMontado] = useState(false);

  const montarDesmontar = () => {
    setEstaMontado(!estaMontado);
  };

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
