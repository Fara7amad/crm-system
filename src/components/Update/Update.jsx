import { useState } from "react";
import Card from "react-bootstrap/Card";
import './Update.css'

const Update = ({head, desc}) => {

  return (
    <>
      <Card className="card">
        <Card.Body>
        <h1 className="head">{head}</h1>
        <p className="body" >{desc}</p>
        </Card.Body>
      </Card>
      <br/>
    </>
  );
};

export default Update;