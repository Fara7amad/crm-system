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
	// const addClient = useAddClient();
	// const deleteClient = useDeleteClient();
	// const updateClient = useUpdateClient();

	const [filteredList, setFilteredList] = useState(clients);

	const [filters, setFilters] = useState({});

	useEffect(() => {
		let filtered = [...filteredList];

		if (filters.type)
			filtered = [...filtered.filter((client) => client.type == filters.type)];

		if (filtered.length != filteredList.length) {
			setFilteredList(filtered);
		}
	}, [filters]);

	console.log(filteredList);

	return (
		<div>
			<h1>
				Clients <FontAwesomeIcon icon="image" size="sm" />
			</h1>

			<ul>
				{filteredList.map((client) => (
					<li>{client.name}</li>
				))}
			</ul>
		</div>
	);
}
export default Clients;
