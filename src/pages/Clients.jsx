import { useEffect, useState } from "react";
import {
	useClient,
	useAddClient,
	useDeleteClient,
	useUpdateClient,
} from "@contexts/ClientsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Clients() {
	const clients = useClient();
	const addClient = useAddClient();
	const deleteClient = useDeleteClient();
	const updateClient = useUpdateClient();

	const [filteredList, setFilteredList] = useState(clients);
	const [filters, setFilters] = useState({ type: "client" });

	useEffect(() => {
		let filtered = [...filteredList];

		if (filters.type)
			filtered = [...filtered.filter((client) => client.type == filters.type)];
	}, [filters]);

	return (
		<div>
			<h1>
				Clients <FontAwesomeIcon icon="image" size="sm" />
			</h1>
		</div>
	);
}
export default Clients;
