import { Container, Row, Col } from "react-bootstrap";

export const ItemListContainer = ({ message }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto"><h1>{message}</h1></Col>
      </Row>
    </Container>
  );
};
