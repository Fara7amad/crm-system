import { Col, Row } from "react-bootstrap";
import PeriodChart from "../components/report/PeriodChart";
import StatusChart from "../components/report/StatusChart";

function Reports() {
	return (
		<div>
			<h1 className="mb-4">Reports</h1>

			<Row>
				<Col xs={12} md={6}>
					<PeriodChart />
				</Col>
				<Col xs={12} md={6}>
					<StatusChart />
				</Col>
			</Row>
		</div>
	);
}
export default Reports;
