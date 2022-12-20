import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Comments from "@components/client/comments/Comments";
import Attachment from "@components/client/attachments/Attachment";
import Update from '@components/client/update/Update'
import '@components/client/update/Update.css'

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
					<div className="updates-holder">
						<Update head="Note" desc="Remember to checkout the leads and customers."/>
						<Update head="Payment" desc="Remember to remove the 5% discount."/>
						<Update head="Payment" desc="Remember to contact the marketing team for the 20% discount."/>
						<Update head="Note" desc="Remember to checkout the comment section."/>
					</div>
					<Comments />
				</Col>
			</Row>
		</div>
	);
};
export default ClientDetails;
