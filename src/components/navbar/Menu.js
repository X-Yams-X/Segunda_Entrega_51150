import { Nav,NavDropdown } from "react-bootstrap";
import {useState, useEffect} from 'react';

export const Menu = () => {

  const [categories, setCategory] = useState([]);

  const urlAPI = 'https://fakestoreapi.com/products/categories'

  const fetchData =  () => {
    try {
      fetch(urlAPI)
      .then(Response => Response.json())
      .then(json => {
        setCategory(json);
      })
    } catch (error) {
      console.log("error", error);
    }
  };  

  useEffect(() => {fetchData()});

  return (
    <Nav>
      <NavDropdown title="Category">
       {categories.map(category => <NavDropdown.Item href="/category/#" key={category}>{category}</NavDropdown.Item>)}
      </NavDropdown>
    </Nav>
  );
};
