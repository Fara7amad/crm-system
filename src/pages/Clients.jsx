import { useClient } from "@contexts/ClientsContext";
import DataTable from "@components/client/DataTable";

function Clients() {
	const clients = useClient();

	console.log(clients);

	return (
		<DataTable data={clients} />
	);
}
export default Clients;
