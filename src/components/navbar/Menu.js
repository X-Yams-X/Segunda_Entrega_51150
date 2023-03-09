import { Nav,NavDropdown } from "react-bootstrap";

export const Menu = () => {
  return (
    <Nav>
      <NavDropdown title="Sedán" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Ford</NavDropdown.Item>
        <NavDropdown.Item href="#">Nissan</NavDropdown.Item>
        <NavDropdown.Item href="#">Ferrari</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="SUV" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">KIA</NavDropdown.Item>
        <NavDropdown.Item href="#">Volvo</NavDropdown.Item>
        <NavDropdown.Item href="#">Tiggo</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Camioneta" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Ford</NavDropdown.Item>
        <NavDropdown.Item href="#">Jeep</NavDropdown.Item>
        <NavDropdown.Item href="#">RAM</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};
