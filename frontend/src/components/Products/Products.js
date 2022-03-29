import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Cards from "../Cards/Cards";
import "./Products.css"

function Products() {
  return (
    <div>
      <Navigation></Navigation>
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
      </div>
    </div>
  );
}

export default Products;
