import { Container, Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import {Item} from "./item.js";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  //Llamar a la API
  useEffect(() => {
    const url = "https://dummyjson.com/products";

    const fetchData =  () => {
      try {
        fetch(url)
        .then(Response => Response.json())
        .then(json => {
          setProducts(json.products);
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    setTimeout(fetchData(),5000) ;
}, []);
  return (
    <Container>
      <Row className="justify-content-md-center">
      {products.map(product => <Item key={product.id} {...product}/>)}
      </Row>
    </Container>
  );
};
