import Card from "react-bootstrap/Card";
import './Update.css'

const Update = ({head, desc}) => {
  if(!head) head = "Update";
  if(!desc) desc = "Update";

  return (
    <>
      <Card className="card-of-updates">
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