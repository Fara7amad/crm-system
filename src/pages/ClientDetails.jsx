import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/Detailscss.css";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import Attachment from "../components/client/attachments/Attachment";

const ClientDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-2 h-100">
      <Button id="button-done" size="sm" as={Link} to="/clients">
        Done
      </Button>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <p>Client info</p>
          <Button className="" size="sm">
            Edit
          </Button>
        </Col>
        <Col xs={12} md={6} lg={4} className="h-100">
          {/* Put here ur component attachments */}
          <Attachment />
        </Col>
        <Col xs={12} md={4} lg={4} className="h-100">
          {/* Put here ur component updates */}
          {/* Put here ur component comments */}
        </Col>
      </Row>
    </div>
  );
};
export default ClientDetails;
