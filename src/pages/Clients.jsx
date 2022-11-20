import DataTable from "@components/client/DataTable";

import MagicSelect from "../components/ui/MagicSelect";
import useLocalStorage from "@hooks/useLocalStorage";
import { Col, Container, Form, Row } from "react-bootstrap";

import { DEFAULT_CLIENT_STATUSES } from "@data/client";

function Clients() {
	const [statuses, setStatuses] = useLocalStorage(
		"client-statuses",
		DEFAULT_CLIENT_STATUSES
	);

	return (
		<div>
			<DataTable />
		</div>
	);
}
export default Clients;
