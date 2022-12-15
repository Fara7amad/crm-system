import "./DataTable.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Cell, HeaderCell, Table, Column } from "rsuite-table";

import { useClient, useDeleteClient } from "@contexts/ClientsContext";
import ClientForm from "../ClientForm";
import usePagination from "@hooks/usePagination";
import { formatDate } from "@utils/helpers";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import ConfirmationModal from "@components/ui/ConfirmationModal";
import FiltersForm from "@components/client/clientFilter/FiltersForm";

const DataTable = () => {
	const clients = useClient();
	const deleteClient = useDeleteClient();
	const [filteredList, setFilteredList] = useState(clients);
	const [selectedClients, setSelectedClients] = useState([]);

	const [deleteModal, setDeleteModal] = useState({
		open: false,
		onConfirmed: null,
	});
	const onCloseModal = () => {
		setDeleteModal({ open: false, onConfirmed: null });
	};

	useEffect(() => {
		setFilteredList(clients);
	}, [clients]);

	const { handlePageClick, currentItems, pageCount, classes } = usePagination(
		filteredList,
		25
	);

	const getDataFilterList = (filterL) => {
		setFilteredList(filterL);
	};

	const toggleClient = (id) => {
		if (selectedClients.includes(id)) {
			setSelectedClients((prev) => prev.filter((clientId) => clientId != id));
		} else {
			setSelectedClients((prev) => [...prev, id]);
		}
	};
	const deleteSelected = () => {
		selectedClients.forEach((clientId) => deleteClient(clientId));
		setSelectedClients([]);
	};

	return (
		<>
			<div>
				<Stack gap={2} direction="horizontal" className="mb-3">
					<Form.Control type="text" placeholder="Search" />

					<div className="button-holder">
						{selectedClients.length > 0 && (
							<Button
								variant="danger"
								onClick={() =>
									setDeleteModal((prev) => ({
										open: true,
										onConfirmed: deleteSelected,
									}))
								}
							>
								Delete All
							</Button>
						)}

						<FiltersForm
							setFilterList={getDataFilterList}
							filteredList={filteredList}
						/>

						<ClientForm />
					</div>
				</Stack>

				<Table data={currentItems} autoHeight virtualized>
					<Column width={50}>
						<HeaderCell
							renderCell={() => (
								<Form.Check
									checked={selectedClients.length === currentItems.length}
									onChange={() =>
										currentItems.forEach((client) => toggleClient(client.id))
									}
								/>
							)}
						/>
						<Cell>
							{(client) => {
								return (
									<Form.Check
										checked={selectedClients.includes(client.id)}
										onChange={() => toggleClient(client.id)}
									/>
								);
							}}
						</Cell>
					</Column>
					<Column>
						<HeaderCell>ID</HeaderCell>
						<Cell
							dataKey="id"
							renderCell={(id) =>
								filteredList.findIndex((client) => client.id === id) + 1
							}
						/>
					</Column>
					<Column flexGrow={1} minWidth={200}>
						<HeaderCell>Company</HeaderCell>
						<Cell dataKey="company" />
					</Column>
					<Column width={120}>
						<HeaderCell>Date Added</HeaderCell>
						<Cell dataKey="date" renderCell={(data) => formatDate(data)} />
					</Column>
					<Column width={100}>
						<HeaderCell>State</HeaderCell>
						<Cell dataKey="state" />
					</Column>

					<Column flexGrow={1} minWidth={130}>
						<HeaderCell>Status</HeaderCell>
						<Cell
							dataKey="status"
							className="text-capitalize"
							renderCell={(status) => status.split("-").join(" ")}
						/>
					</Column>

					<Column flexGrow={1} minWidth={100}>
						<HeaderCell>Type</HeaderCell>
						<Cell dataKey="type" />
					</Column>

					<Column width={200}>
						<HeaderCell>Actions</HeaderCell>
						<Cell>
							{(client) => (
								<div>
									<Button
										variant="primary"
										size="sm"
										className="details-button me-2"
										as={Link}
										to={`/details/${client.id}`}
									>
										Details
									</Button>

									<Button
										variant="danger"
										size="sm"
										onClick={() =>
											setDeleteModal((prev) => ({
												open: true,
												onConfirmed: () => deleteClient(client.id),
											}))
										}
									>
										Delete
									</Button>
								</div>
							)}
						</Cell>
					</Column>
				</Table>

				<ReactPaginate
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					{...classes}
				/>
			</div>

			{/* Modal */}
			<ConfirmationModal
				isOpen={deleteModal.open}
				handleConfirmed={deleteModal.onConfirmed}
				onClose={onCloseModal}
			/>
		</>
	);
};

export default DataTable;
