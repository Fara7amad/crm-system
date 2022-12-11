import { useClient } from "@contexts/ClientsContext";

function StatusChart() {
	const clients = useClient();

	console.log(clients);

	return <div></div>;
}
export default StatusChart;
