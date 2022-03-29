import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardsMod.css";

function CardsMod() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          &nbsp;
          <Button variant="primary">+</Button>
          &nbsp;
          <Button variant="primary">-</Button>
          &nbsp;
          &nbsp;
          &nbsp;
          <label
            for="exampleFormControlInput1"
            class="form-label label-checkout"
          >
            0
          </label>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardsMod;
