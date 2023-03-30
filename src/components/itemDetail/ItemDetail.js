import Card from 'react-bootstrap/Card';
import { DataFetch } from "../../services/DataFetch.js";

export const ItemDetail = ({id_item}) => {

  const rutaAPI = "products/"+id_item;
  const {response} = DataFetch(rutaAPI);

  if (response !== undefined) {
    return(
      <Card className="text-black" style={{ margin: 50 }}>
      <Card.Header>Coding:{response.id}</Card.Header>
      <Card.Body>
        <Card.Title>{response.title}</Card.Title>
        <Card.Img
            variant="top"
            src={response.image}
            style={{ width: 100, height: 120 }}
          />
        <Card.Text>
          {response.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Puntaje:100</Card.Footer>
    </Card>
  )
  }
  
};

