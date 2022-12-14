import "./DataTable.css";
import Form from "react-bootstrap/Form";
import FiltersForm from "@components/client/clientFilter/FiltersForm";
import { useState } from "react";
import { useClient } from "@contexts/ClientsContext";
import ClientForm from "../ClientForm";
import { Cell, HeaderCell, Table, Column } from "rsuite-table";
import usePagination from "@hooks/usePagination";
import ReactPaginate from "react-paginate";
import { formatDate } from "@utils/helpers";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

const DataTable = () => {
	const clients = useClient();
	const [filteredList, setFilteredList] = useState(clients);

	const { handlePageClick, currentItems, pageCount, classes } = usePagination(
		filteredList,
		25
	);

	const getDataFilterList = (filterL) => {
		setFilteredList(filterL);
	};

	return (
		<div>
			<Stack gap={2} direction="horizontal" className="mb-3">
				<Form.Control type="text" placeholder="Search" />

				<div className="button-holder">
					<FiltersForm
						setFilterList={getDataFilterList}
						filteredList={filteredList}
					/>

					<ClientForm />
				</div>
			</Stack>

			<Table data={currentItems} autoHeight /* height={500}  */ virtualized>
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

								<Button variant="danger" size="sm">
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
	);
};

export default DataTable;
