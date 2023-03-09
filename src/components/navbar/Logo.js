import {Navbar} from "react-bootstrap";

export const Logo = () => {
  return (
    <Navbar.Brand href="/">
      <img
        src="../../assets/icons/logo.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
      Yams
    </Navbar.Brand>
  );
};
