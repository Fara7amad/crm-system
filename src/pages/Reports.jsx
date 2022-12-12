import { Col, Row } from "react-bootstrap";
import ReportFiltering from "../components/reports/reportFiltering";

function Reports() {
  return (
    <div>
      <h1 className="mb-4">Reports</h1>

      <ReportFiltering />

      {/* <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
         
        
        </Col>
        <Col xs={12} md={6}></Col>
      </Row> */}
    </div>
  );
}
export default Reports;
