import { Container, Row} from "react-bootstrap";
import { DataFetch } from "../../services/DataFetch.js";
import { Item } from "./item.js";
import { useParams } from "react-router";

export const ItemListContainer = () => {
const { id } = useParams();
  const urlAPI = id ? "products/category/"+id : "products?limit=12";
  const {response} = DataFetch(urlAPI);
  return (
    <Container>
      <Row className="justify-content-md-center">
      {response?.map(product => <Item key={product.id} {...product}/>)}
      </Row>
    </Container>
  );
};
