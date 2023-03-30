import {Navbar} from "react-bootstrap";

export const Logo = () => {
  return (
    <Navbar.Brand href="/">
      <img
        src="#"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
      Yams
    </Navbar.Brand>
  );
};
