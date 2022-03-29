import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container-fluid page container-checkout">
        <div className="container">
          <div className="row input-checkout">
            <div className="col-sm-3">
              <label
                for="exampleFormControlInput1"
                class="form-label label-checkout"
              >
                Enter user id
              </label>
            </div>
            <div class="col-sm-7">
              <input
                type="input"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="col-sm-2">
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
            <div></div>
          </div>
          <div className="row buttons-checkout">
              <div className="col-sm-3"><button type="button" class="btn btn-primary" >Create</button></div>
              <div className="col-sm-6"><button type="button" class="btn btn-primary" >Add To Cart</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
