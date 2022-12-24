import "./DataTable.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Cell, HeaderCell, Table, Column } from "rsuite-table";

import { useClient } from "@contexts/ClientsContext";
import ClientAdd from './ClientAdd'
import usePagination from "@hooks/usePagination";
import { formatDate } from "@utils/helpers";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import FiltersForm from "@components/client/clientFilter/FiltersForm";
import Dropdown from 'react-bootstrap/Dropdown'
import { get_index } from "../attachments/Datalist";

const DataTable = () => {
	const clients = useClient();
	const [filteredList, setFilteredList] = useState(clients);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	//---------------------------Searching-------------------------------------

	useEffect(() => {
	setFilteredList(clients);
	}, [clients]);

	const [search, setSearch] = useState("");
	const searchData = (e) => {
		setFilteredList(
			clients.filter((user) =>
			user.company.toLowerCase().includes(e.target.value.trim().toLowerCase())
			)
		);

		setSearch(e.target.value);
	};
	//----------------------------------------------------------------

	useEffect(() => {
		setFilteredList(clients);
	}, [clients]);

	const { handlePageClick, currentItems, pageCount, numberOfItemsInEachPage, classes } = usePagination(
		filteredList,
		rowsPerPage
	);

	const getDataFilterList = (filterL) => {
		setFilteredList(filterL);
	};

	useEffect(() => {
		setFilteredList(clients);
	}, [rowsPerPage]);


	const handleRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.innerText));
	}

	return (
		<>
			<Stack direction="horizontal" gap={2}>
			<Form.Control
				type="text"
				id="search-bar"
				placeholder="Search"
				className="search-bar"
				value={search}
				onChange={searchData}
			/>
				<div className="d-flex align-items-center gap-2 datatable-button-holder">
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							{rowsPerPage}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item onClick={handleRowsPerPage}>5</Dropdown.Item>
							<Dropdown.Item onClick={handleRowsPerPage}>10</Dropdown.Item>
							<Dropdown.Item onClick={handleRowsPerPage}>15</Dropdown.Item>
							<Dropdown.Item onClick={handleRowsPerPage}>20</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<FiltersForm setFilterList={getDataFilterList} filteredList={filteredList} />
					<ClientAdd/>
				</div>
			</Stack>

			<Table className="mt-2" data={currentItems} hover autoHeight bordered>
				<Column width={40}>
					<HeaderCell>
						<Form.Check
							unchecked
						/>
					</HeaderCell>
					<Cell>
						<Form.Check
							unchecked
						/>
					</Cell>
				</Column>
				<Column width={60}>
					<HeaderCell flexGrow={1} className="fw-bold">ID</HeaderCell>
					<Cell
						dataKey="id"
						renderCell={(id) =>
							filteredList.findIndex((client) => client.id === id) + 1
						}
					/>
				</Column>
				<Column flexGrow={1} minWidth={200}>
					<HeaderCell className="fw-bold">Company</HeaderCell>
					<Cell dataKey="company" />
				</Column>
				<Column flexGrow={1} width={100}>
					<HeaderCell className="fw-bold">Date Added</HeaderCell>
					<Cell dataKey="date" renderCell={(data) => formatDate(data)} />
				</Column>
				<Column flexGrow={1} width={60}>
					<HeaderCell className="fw-bold">State</HeaderCell>
					<Cell dataKey="state" />
				</Column>
				<Column flexGrow={1} width={150}>
					<HeaderCell className="fw-bold">Status</HeaderCell>
					<Cell dataKey="status" className="text-capitalize" 
						renderCell={(status) => (
							<span className={`badge bg-${status === "hot-lead" ? "warning text-dark" : status === "cold-lead" ? "info" : status === "interested" ? "success" : status === 'contacted' ? "primary" : "danger"}`}>
								{status}
							</span>
						)}
					/>
				</Column>
				<Column flexGrow={1}  width={100}>
					<HeaderCell className="fw-bold">Type</HeaderCell>
					<Cell dataKey="type" />
				</Column>
				<Column width={200}>
					<HeaderCell className="fw-bold text-center">Actions</HeaderCell>
					<Cell className="text-center">
						{(client) => (
							<div>
								<Button
									variant="primary"
									size="sm"
									className="details-button me-1"
									as={Link}
									to={`/details/${client.id}`}
									onClick= { ()=> {get_index(client.id)}}
								>
									Details
								</Button>

								<Button
									variant="danger"
									size="sm"

								>
									Delete
								</Button>
							</div>
						)}
					</Cell>
				</Column>
			</Table> 
				
			<div className="d-flex justify-content-end mt-1">
				{numberOfItemsInEachPage()}
			</div>

			<ReactPaginate
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					{...classes}
				/>

		</>
	);
};

export default DataTable;