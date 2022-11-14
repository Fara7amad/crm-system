import { useClient } from "@contexts/ClientsContext";
import DataTable from "@components/client/DataTable";

function Clients() {
	const clients = useClient();

	return <div>
		<DataTable data={clients}/>
	</div>;
}
export default Clients;
