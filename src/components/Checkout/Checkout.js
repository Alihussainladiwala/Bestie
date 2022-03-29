import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import CardsMod from "../CardsMod/CardsMod";
import "./Checkout.css";

function Checkout() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container-fluid container-products">
        <div className="row">
          <div class="col-sm-3">
            <CardsMod></CardsMod>
          </div>
          <div class="col-sm-3">
            <CardsMod></CardsMod>
          </div>
          <div class="col-sm-3">
            <CardsMod></CardsMod>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
