import { Container, Row} from "react-bootstrap";
import { useState } from "react";
import {Item} from "./item.js";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  //const urlAPI = "https://fakestoreapi.com/products?limit=8";
  const urlJson = "../../data/DataAPI.json";

  //*Método donde llamamos json Local(Promise Clase 6) -> Se pasara a una API

  const fetchData =  () => {
    try {
      fetch(urlJson)
      .then(Response => Response.json())
      .then(json => setProducts(json))
    } catch (error) {
      console.log("error", error);
    }
  };
  
  setInterval(fetchData(),10000); //!Después cambiar por useEffect
  
  return (
    <Container>
      <Row className="justify-content-md-center">
      {products.map(product => <Item key={product.id} {...product}/>)}
      </Row>
    </Container>
  );
};
