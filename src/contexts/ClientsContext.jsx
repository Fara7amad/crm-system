import { createContext, useContext } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import { jsonReviver } from "@utils/jsonReviver";
import { v4 as uuid } from "uuid";
import clientsJson from "../data/data.json";

const ClientContext = createContext();

export function useClient() {
	return useContext(ClientContext);
}

const AddClientContext = createContext();

export function useAddClient() {
	return useContext(AddClientContext);
}

const DeleteClientContext = createContext();

export function useDeleteClient() {
	return useContext(DeleteClientContext);
}

const UpdateClientContext = createContext();

export function useUpdateClient() {
	return useContext(UpdateClientContext);
}

export default function ClientsProvider({ children }) {
	const [clients, setClients] = useLocalStorage(
		"clients",
		JSON.parse(
			JSON.stringify(clientsJson.map((ct) => ({ ...ct, id: uuid() }))),
			jsonReviver
		)
	);

	const addClient = (client) => {
		const exists = Boolean(clients.find((item) => item.id == client.id));
		if (exists) return alert("Client already exists");

		setClients([...clients, client]);
	};
	const deleteClient = (id) => {
		setClients((prv) => prv.filter((client) => client.id != id));
	};
	const updateClient = (id, fields) => {
		setClients(
			clients.map((client) =>
				client.id == id ? { ...client, ...fields } : client
			)
		);
	};

	return (
		<ClientContext.Provider value={clients}>
			<AddClientContext.Provider value={addClient}>
				<DeleteClientContext.Provider value={deleteClient}>
					<UpdateClientContext.Provider value={updateClient}>
						{children}
					</UpdateClientContext.Provider>
				</DeleteClientContext.Provider>
			</AddClientContext.Provider>
		</ClientContext.Provider>
	);
}
