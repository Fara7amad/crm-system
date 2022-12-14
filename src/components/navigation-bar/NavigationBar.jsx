import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightFromBracket,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

import Notification from "./Notification";

export default function NavigationBar({ toggleSidebar }) {
	const location = useLocation().pathname;

	const getCurrentTitle = () => {
		switch (location) {
			case "/":
			case "/clients":
				return "Clients";
			case "/reports":
				return "Reports";
			case "/billings":
				return "Billings";
			default:
				return "Dashboard";
		}
	};

	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Container>
				<FontAwesomeIcon
					size="2x"
					icon={faBars}
					onClick={toggleSidebar}
					className="cursor-pointer"
				/>

				<Navbar.Brand>
					<h1>
						<b>{getCurrentTitle()}</b>
					</h1>
				</Navbar.Brand>

				<div>
					<Notification />

					<Button className="ms-2">
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
					</Button>
				</div>
			</Container>
		</Navbar>
	);
}
