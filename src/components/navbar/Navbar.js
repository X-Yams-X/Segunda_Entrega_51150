import {Container, Navbar } from "react-bootstrap";
import {CardWidget} from "./CardWidget.js";
import {Logo} from "./Logo.js";
import {Menu} from "./Menu.js";

export const BarraNavegacion = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Logo/>
        <Menu/>
        <CardWidget/>
      </Container>
    </Navbar>
  );
};

