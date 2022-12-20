import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { formatDate } from "@utils/helpers";
import { useClient } from "@contexts/ClientsContext";
import { Link } from "react-router-dom";

const BillingsTable = () => {
	const clients = useClient();

	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 10;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(clients.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(clients.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, clients]);

	const setHeaderOfTable = () => {
		return (
			<tr>
				<th className="thead-values-id">ID</th>
				<th className="thead-values-company">Company name</th>
				<th className="thead-values-company">Attachment Title</th>
				<th className="thead-values-date">Date Added</th>
				<th className="thead-values-status">Status</th>
				<th className="thead-values-edit">Details</th>
			</tr>
		);
	};

	const handlePageClick = (e) => {
		const newOffset = (e.selected * itemsPerPage) % clients.length;
		setItemOffset(newOffset);
	};

	const bodyOfTable = () => {
		return currentItems.map((client, index) => {
			return (
				<tr>
					<td className="tbody-values-id">{index + 1 + itemOffset}</td>
					<td className="tbody-values-company">{client.company}</td>
					<td className="tbody-values-company">{client.title}</td>
					<td className="tbody-values-date">{formatDate(client.date)}</td>
					<td className="tbody-values-status">{client.status}</td>
					<td className="tbody-values-edit">
						<Button
							variant="primary"
							size="sm"
							className="details-button"
							as={Link}
							to={`/details/${client.id}`}
						>
							Details
						</Button>
					</td>
				</tr>
			);
		});
	};

	const numberOfItemsInEachPage = () => {
		return `Showing ${itemOffset + 1} to ${
			itemOffset + currentItems.length
		} of ${clients.length} entries`;
	};

	return (
		<>
			<div className="container data-shower">
				<Table responsive="sm" className="table-holder">
					<thead>{setHeaderOfTable()}</thead>
					<tbody>{bodyOfTable()}</tbody>
				</Table>
			</div>
			<ReactPaginate
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination justify-content-center mt-2"
				activeClassName="active"
			/>
			<div className="small-header">{numberOfItemsInEachPage()}</div>
		</>
	);
};
export default BillingsTable;