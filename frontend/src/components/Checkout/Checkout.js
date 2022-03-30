import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import CardsMod from "../CardsMod/CardsMod";
import "./Checkout.css";
import Axios from "axios";

function Checkout() {
  const [checkoutList, setCheckoutList] = useState([]);

  let getProducts = () => {
    return new Promise((resolve, reject) => {
      Axios.get("http://localhost:3001/getCheckOutList/123").then(
        (response) => {
          resolve(response.data);
        }
      );
    });
  };

  useEffect(() => {
    console.log("page loaded");

    getProducts().then((res) => {
      console.log(res);
      setCheckoutList(res);
    });
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="container-fluid container-products">
        <div className="row">
          {checkoutList.map((a) => (
            <div class="col-sm-3">
              <CardsMod></CardsMod>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
