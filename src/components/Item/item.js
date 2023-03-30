import {Button, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

export const Item = ({id, category, title, image, price}) => {
  return (
    <Card style={{ width: "18rem", margin: 10 }}>
      <Card.Header as="h5" className="text-center">
        {category}
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Img
          variant="top"
          src={image}
          style={{ width: 100, height: 120 }}
        />
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">${price}</Button>
      </Card.Body>
      <Card.Footer className="text-center">
          <Link to={`/item/${id}`}>
            Ver Detalle
          </Link>
      </Card.Footer>
    </Card>
  );
};
