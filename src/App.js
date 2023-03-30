import {BarraNavegacion} from "./components/navbar/Navbar.js";
import { ItemListContainer } from "./components/Item/ItemListContainer.js";
import { ItemDetailsContainer } from "./components/itemDetail/ItemDetailsContainer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <BarraNavegacion/>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route exact path="/:id" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailsContainer/>}/>
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
