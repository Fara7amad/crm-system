import "./DataTable.css";
import Table from "react-bootstrap/Table";
import TablePagination from "./TablePagination";
import Form from "react-bootstrap/Form";
import FiltersForm from "@components/client/clientFilter/FiltersForm";
import { useState } from "react";
import { useClient } from "@contexts/ClientsContext";

// ? install React Pagination using
// ? npm i react-paginate
// ? install React Bootstrap using
// ? npm i react-bootstrap bootstrap

const DataTable = (props) => {
	const clients = useClient();
	const [filteredList, setFilteredList] = useState(clients);

	const getDataFilterList = (filterL) => {
		setFilteredList(filterL);
	};
	const setTh = () => {
		return (
			<tr>
				<th className="thead-values-checkbox-select"></th>
				<th className="thead-values-id">ID</th>
				<th className="thead-values-company">Company</th>
				<th className="thead-values-date">Date Added</th>
				<th className="thead-values-state">State</th>
				<th className="thead-values-status">Status</th>
				<th className="thead-values-type">Type</th>
				<th className="thead-values-delete-button"></th>
				<th className="thead-values-details-button"></th>
			</tr>
		);
	};

	return (
		<div className="main-holder container">
			<div className="cont">
				<div className="container data-shower">
					<div className="header-client"></div>
					<div className="button-holder">
						<FiltersForm
							setFilterList={getDataFilterList}
							filteredList={filteredList}
						/>
					</div>
					<Form.Control
						type="text"
						id="search-bar"
						placeholder="Search"
						className="search-bar"
					/>
					<Table responsive="sm" className="table-holder" bordered hover>
						<thead>{setTh()}</thead>
						<tbody>
							<TablePagination data={filteredList} />
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
