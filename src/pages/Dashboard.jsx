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
import Areachart from "../components/dashboard/Areachart";
import VerticalBarchart from "../components/dashboard/VerticalBarchart";
import Calendar from "react-calendar";

//import "react-calendar/dist/Calendar.css";

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
						<Card body className="cardth3">
							<i className="fa-3x">
								<FontAwesomeIcon icon={faPeopleGroup} className="iconn" />{" "}
								<b className="iconn">{Total_customers} </b>
							</i>
							<div>
								<b className="iconn fonSiz"> Total customers </b>
							</div>
						</Card>
					</Col>

					<Col xs={12} md={4} lg={4}>
						<Card body className="cardth3">
							<i className="fa-3x">
								<FontAwesomeIcon icon={faHandshake} className="iconn" />{" "}
								<b className="iconn">{Total_project} </b>
							</i>
							<div>
								<b className="iconn fonSiz"> Total project </b>
							</div>
						</Card>
					</Col>

					<Col xs={12} md={4} lg={4}>
						<Card body className="cardth3">
							<i className="fa-3x">
								<FontAwesomeIcon icon={faSackDollar} className="iconn" />{" "}
								<b className="iconn">{Ernings} </b>
							</i>
							<div>
								<b className="iconn fonSiz"> Ernings </b>
							</div>
						</Card>
					</Col>
				</Row>{" "}
				<br />
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
				<br />
				<Row>
					<Col lg={6}>
						<Card body>
							<Areachart />
						</Card>
					</Col>
					<Col lg={6}>
						<Card body>
							<VerticalBarchart />
						</Card>
					</Col>
				</Row>
			</Col>

			<Col xs={12} md={4} lg={3}>
				<Card>
					<Card.Body>
						<Card.Header className="cardHeaderCelender">
							Since your last login:
						</Card.Header>
						<b className="newComments"> {new_comments} new comments</b>
						<br />
						<b className="newComments"> {new_clients} new clients</b>
						<br />
						<b className="income">{income}$ income</b>
						<br />
						<blockquote className="blockquote mb-0">
							<Calendar />
						</blockquote>
					</Card.Body>
				</Card>
				<br />
				<Card>
					<PieChart />
				</Card>
			</Col>
		</Row>
	);
}
export default Dashboard;
