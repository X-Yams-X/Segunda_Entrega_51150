import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'

export const ItemDetail = ({id}) => {

  const [product, setProduct] = useState("");

  const urlAPI = `https://fakestoreapi.com/products/${id}`

  const fetchData =  () => {
    try {
      fetch(urlAPI)
      .then(Response => Response.json())
      .then(json => setProduct(json))
    } catch (error) {
      console.log("error", error);
    }
  };  

  useEffect(() => {fetchData()});
  return (
    <Card className="text-black" style={{ margin: 50 }}>    
    <Card.Header>Codigo:{product.id}</Card.Header>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Img
          variant="top"
          src={product.image}
          style={{ width: 100, height: 120 }}
        />
      <Card.Text>
        {product.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Puntaje:100</Card.Footer>
  </Card>
  )
};

