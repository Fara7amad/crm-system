import { useClient } from "@contexts/ClientsContext";

function Clients() {
	const clients = useClient();

	console.log(clients);

	return <div></div>;
}
export default Clients;
