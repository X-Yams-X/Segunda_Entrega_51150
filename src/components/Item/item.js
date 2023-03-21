import {Button, Card} from 'react-bootstrap';

export const Item = ({brand, title, description, price, rating, images}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header as="h5">{brand}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={images[1]}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">${price}</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Ranking: {rating}</Card.Footer>
    </Card>
  );
};
