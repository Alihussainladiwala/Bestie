import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Cards from "../Cards/Cards";
import "./Products.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import {Grid, Row, Col} from "react-bootstrap";
import axios from 'axios';



function Products() {
  const [products, setProducts] = React.useState([]);


  const createProductCard = (row, index) => {
        
    return (
  <Col>   
    <div>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{row.name}</Card.Title>
            <Card.Text>
              <b>Price: </b>${row.amount}
            </Card.Text>
            <Button variant="primary">BUY NOW</Button>
          </Card.Body>
        </Card>
        <br/>
        
    </div>
  </Col>
    );
};

useEffect(() => {
  
  console.log('inside use effect');
  axios.get("http://localhost:3001/getProducts").then((response) =>
  {
      console.log(response.data)
      setProducts(response.data)
      

  });
  
}, []);
  

  return (
    <div>

      <center><h1>ALL PRODUCTS</h1></center>
      <br/>
      <br/>
      {console.log("ALL PRODUCTS",products)}
      <Row xs={1} md={3}>
        {products?[products.map(createProductCard)]:''}
      </Row>

{/* <div>
<div class="col-sm-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </div> */}



       {/* <Navigation></Navigation>
       <div className="container-fluid ">
         <div className="row container-products">
           <div class="col-sm-3">
             <Cards></Cards>
           </div>
           <div class="col-sm-3">
             <Cards></Cards>
           </div>
          
           <div class="col-sm-3">
             <Cards></Cards>
           </div>
         </div>
       </div> */}


    </div>
  );
}

export default Products;
