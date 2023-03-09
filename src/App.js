import {BarraNavegacion} from "./components/navbar/Navbar.js"
import {ItemListContainer} from "./components/body/ItemListContainer.js";

function App() {
  return (
    <>
      <BarraNavegacion/>
      <ItemListContainer message={"Esto es un mensaje"}/>
    </>
  );
}

export default App;
