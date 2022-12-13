import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
	faHandshake,
	faPeopleGroup,
	faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import BarChart from "@components/dashboard/BarChart";
import LineChart from "@components/dashboard/LineChart";
import PieChart from "@components/dashboard/PieChart";
import Calendar from "react-calendar";

function Dashboard() {
	return (
		<Row>
			<Col xs={12} lg={9}>
				<Row xs={1} md={2} className="g-4">
					<Col xs={12} md={4} lg={4}>
						<Card body style={{ width: "80%", height: "70%" }}>
							<Row>
								<FontAwesomeIcon
									icon={faPeopleGroup}
									transform="grow-30 down-50 right-100"
								/>
							</Row>
							<Row>
								<div className="clients">
									<div className="middle">
										<div className="left">
											<h3>Total Clients</h3>
											<h1>500</h1>
										</div>
									</div>
								</div>
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={4} lg={4}>
						<Card body style={{ width: "80%", height: "70%" }}>
							<Row>
								<FontAwesomeIcon
									icon={faHandshake}
									transform="grow-30 down-50 right-100"
								/>
							</Row>
							<Row>
								<div className="projects">
									<div className="middle">
										<div className="left">
											<h3>Total Projects</h3>
											<h1>183</h1>
										</div>
									</div>
								</div>
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={4} lg={4}>
						<Card body style={{ width: "80%", height: "70%" }}>
							<Row>
								<FontAwesomeIcon
									icon={faSackDollar}
									transform="grow-30 down-50 right-100"
								/>
							</Row>
							<Row>
								<div className="earnings">
									<div className="middle">
										<div className="left">
											<h3>Total Earnings</h3>
											<h1>$13840</h1>
										</div>
									</div>
								</div>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col lg={6}>
						<Card body>
							<BarChart />
						</Card>
					</Col>
					<Col lg={6}>
						<Card body>
							<LineChart />
						</Card>
					</Col>
				</Row>
			</Col>

			<Col xs={12} md={4} lg={3}>
				<Row>
					<div>
						<Card style={{ width: "99%" }}>
							<Card.Header>
								<h3>Since your last login:</h3>
							</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										-21 new comments. <br></br>- 15 new clients. <br></br>
										- +307$ income.
										<Calendar />
									</p>
								</blockquote>
							</Card.Body>
						</Card>
					</div>
				</Row>
				<br></br>
				<div>
					<Row>
						<Card style={{ width: "95%" }}>
							<PieChart />
						</Card>
					</Row>
				</div>
			</Col>
		</Row>
	);
}
export default Dashboard;
