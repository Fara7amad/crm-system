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
<<<<<<< HEAD
import Dropdown from "react-bootstrap/Dropdown";
=======
import Dropdown from 'react-bootstrap/Dropdown'
import { get_index } from "../attachments/Datalist";
import confirmationMessage from "../Delete/delete"
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca

const DataTable = () => {
	const clients = useClient();
	const [filteredList, setFilteredList] = useState(clients);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const [arrayOfID,setarrayOfID] = useState([]);
	const [countOfDelete, setcountOfDelete] = useState("one client");
	const [index_, setindex] = useState(0);
	  

	//---------------------------Searching-------------------------------------

	useEffect(() => {
		setFilteredList(clients);
		setarrayOfID([]);
		setindex(0);
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

	const {
		handlePageClick,
		currentItems,
		pageCount,
		numberOfItemsInEachPage,
		classes,
	} = usePagination(filteredList, rowsPerPage);

	const getDataFilterList = (filterL) => {
		setFilteredList(filterL);
	};

	useEffect(() => {
		setFilteredList(clients);
	}, [rowsPerPage]);

	const handleRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.innerText));
<<<<<<< HEAD
	};
=======
	}
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca

	const toggleClient = (id) => {
		if (arrayOfID.includes(id)) {
			setarrayOfID((prev) => prev.filter((clientId) => clientId != id));
		} else {
			setarrayOfID((prev) => [...prev, id]);
		}
	};

	return (
		<>
			{confirmationMessage(index_, countOfDelete,arrayOfID)}
      		<confirmationMessage />
			<Stack direction="horizontal" gap={2}>
<<<<<<< HEAD
				<Form.Control type="text" placeholder="Search" />
=======
			<Form.Control
				type="text"
				id="search-bar"
				placeholder="Search"
				className="search-bar"
				value={search}
				onChange={searchData}
			/>
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca
				<div className="d-flex align-items-center gap-2 datatable-button-holder">
				<button
					type="button"
					class="btn btn-danger"
					style={{ display: arrayOfID.length > 0 ? "inline" : "none" }}
					data-bs-toggle="modal"
					data-bs-target="#staticBackdrop2"
					onClick={() => {
					if (arrayOfID.length == 1) setcountOfDelete("one client");
					else setcountOfDelete(arrayOfID.length + " clients");
					}}
				>
					Delete All
				</button>
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
<<<<<<< HEAD
					<FiltersForm
						setFilterList={getDataFilterList}
						filteredList={filteredList}
					/>
					<ClientForm />
=======
					<FiltersForm setFilterList={getDataFilterList} filteredList={filteredList} />
					<ClientAdd/>
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca
				</div>
			</Stack>

			<Table className="mt-2" data={currentItems} hover autoHeight bordered>
				<Column width={40}>
					<HeaderCell>
<<<<<<< HEAD
						<Form.Check unchecked />
					</HeaderCell>
					<Cell>
						<Form.Check unchecked />
=======
					<Form.Check
						checked={arrayOfID.length === currentItems.length}

              			onChange={() => {
							currentItems.forEach((client) => toggleClient(client.id))
              			}}
            		/>{" "}
					</HeaderCell>
					<Cell>
					{(client) => {
						return (
							<Form.Check
							checked={arrayOfID.includes(client.id)}

							onChange={() => {
								if (arrayOfID.includes(client.id)) {
									setarrayOfID((prev) => prev.filter((clientId) => clientId != client.id));
								} else {
									setarrayOfID((prev) => [...prev, client.id]);
								}
						
								
							}}
							/>
						);
					}}
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca
					</Cell>
				</Column>
				<Column width={60}>
					<HeaderCell flexGrow={1} className="fw-bold">
						ID
					</HeaderCell>
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
					<Cell
						dataKey="status"
						className="text-capitalize"
						renderCell={(status) => (
							<span
								className={`badge bg-${
									status === "hot-lead"
										? "warning text-dark"
										: status === "cold-lead"
										? "info"
										: status === "interested"
										? "success"
										: status === "contacted"
										? "primary"
										: "danger"
								}`}
							>
								{status}
							</span>
						)}
					/>
				</Column>
				<Column flexGrow={1} width={100}>
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

<<<<<<< HEAD
								<Button variant="danger" size="sm">
=======
								<Button
								onClick={() => setindex(filteredList.indexOf(client))}
								variant="danger"
								size="sm"
								style={{ display: arrayOfID.length > 0 ? "none" : "inline" }}
								data-bs-toggle="modal"
								data-bs-target="#staticBackdrop"
								>
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca
									Delete
								</Button>
							</div>
						)}
					</Cell>
				</Column>
			</Table>

			<div className="d-flex fw-semibold justify-content-end mt-1">
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
