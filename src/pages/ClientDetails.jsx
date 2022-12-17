import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Comments from "@components/client/comments/Comments";
import Attachment from "@components/client/attachments/Attachment";

const ClientDetails = () => {
	return (
		<div className="p-2">
			<Button
				className="position-absolute"
				style={{ bottom: "2%" }}
				size="sm"
				as={Link}
				to="/clients"
			>
				Done
			</Button>

			<Row>
				<Col xs={12} lg={6} xxl={4}>
					<p>Client info</p>
				</Col>

				<Col xs={12} lg={6} xxl={4}>
					<Attachment />
				</Col>

				<Col xs={12} xxl={4}>
					<Comments />
				</Col>
			</Row>
		</div>
	);
};
export default ClientDetails;
