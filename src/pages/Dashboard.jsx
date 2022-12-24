import "./DashboardPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHandshake,
	faPeopleGroup,
	faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarChart from "../components/dashboard/Barchart";
import LineChart from "@components/dashboard/LineChart";
import PieChart from "@components/dashboard/PieChart";
import Calendar from "react-calendar";
import { useState } from "react";
// import "react-calendar/dist/Calendar.css";

function Dashboard() {
	let Total_customers = 500;
	let Total_project = 183;
	let Ernings = 13840;
	let new_comments = -21;
	let new_clients = -15;
	let income = 307;

	return (
		<Row>
			<Col xs={12} lg={9}>
				<Row xs={1} md={2} className="g-4">
					<Col xs={12} md={4} lg={4}>
						<Card
							style={{
								width: "100%",
								height: "80%",
								backgroundColor: "#25396f",
							}}
							className=""
						>
							<Row>
								<i>
									<FontAwesomeIcon icon={faPeopleGroup} className="iconn" />
									<b className="iconn">Total customers {Total_customers}</b>
								</i>
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={4} lg={4}>
						<Card
							body
							style={{
								width: "100%",
								height: "80%",
								backgroundColor: "#25396f",
							}}
							className="cardth3"
						>
							<Row>
								<i>
									<FontAwesomeIcon icon={faHandshake} className="iconn" />{" "}
									<b className="iconn"> Total projects {Total_project} </b>{" "}
								</i>
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={4} lg={4}>
						<Card
							body
							style={{
								width: "100%",
								height: "80%",
								backgroundColor: "#25396f",
							}}
							className="cardth3"
						>
							<Row>
								<i>
									{" "}
									<FontAwesomeIcon icon={faSackDollar} className="iconn" />{" "}
									<b className="iconn"> Ernings {Ernings} </b>{" "}
								</i>
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

			<Col xs={12} lg={3}>
				<Row>
					<div>
						<Card>
							<Card.Body>
								<Card.Header
									style={{ color: "white", backgroundColor: "#25396f" }}
								>
									Since your last login:
								</Card.Header>
								<b style={{ color: "red" }}> {new_comments} new comments</b>
								<br />
								<b style={{ color: "red" }}> {new_clients} new clients</b>
								<br />
								<b style={{ color: "green" }}>{income}$ income</b>
								<br />
								<blockquote className="blockquote mb-0">
									<Calendar />
								</blockquote>
							</Card.Body>
						</Card>
					</div>
				</Row>
				<Row>
					<PieChart />
				</Row>
			</Col>
		</Row>
	);
}
export default Dashboard;
