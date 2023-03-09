import { Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";

export const CardWidget = () => {
  return (
    <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="">                      
              <Badge bg="danger">
                <FaShoppingCart/>&nbsp;&nbsp;4 Auto</Badge>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item> */}
        </Nav>
  )
}
