import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Cards from "../Cards/Cards";
import "./Products.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

function Products() {
  return (
    <div>


<div>
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
    </div>



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
