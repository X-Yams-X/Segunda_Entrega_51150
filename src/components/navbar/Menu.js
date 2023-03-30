import { Nav,NavDropdown } from "react-bootstrap";
import { DataFetch } from "../../services/DataFetch.js";

export const Menu = () => {

  const rutaAPI = "products/categories";
  const {response} = DataFetch(rutaAPI);

  if (response !== undefined) {
  return (
    <Nav>
      <NavDropdown title="Category">
       {response.map(category =><NavDropdown.Item href={('/'+category)} key={category}>{category}</NavDropdown.Item>)}
      </NavDropdown>
    </Nav>
  );
  }
};
