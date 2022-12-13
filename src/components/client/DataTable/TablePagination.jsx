import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { formatDate } from "@utils/helpers";
import { Link } from "react-router-dom";

export default function TablePagination(props) {
	const { data } = props;
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 20;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(data.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(data.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, data]);

	const handlePageClick = (e) => {
		const newOffset = (e.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	};

	const getData = () => {
		return currentItems.map((client, index) => {
			return (
				<tr key={client.id}>
					<td className="tbody-values-checkbox-select">
						<Form.Check type="checkbox" className="checkbox-select" />
					</td>
					<td className="tbody-values-id">{index + 1 + itemOffset}</td>
					<td
						className="tbody-values-company"
						title="To view more, click on 'Details'"
					>
						{client.company}
					</td>
					<td className="tbody-values-date">
						{/* {client.date.toLocaleString().slice(0, 9)} */}
						{formatDate(client.date)}
					</td>
					<td className="tbody-values-state">{client.state}</td>
					<td className="tbody-values-status">{client.status}</td>
					<td className="tbody-values-type">{client.type}</td>
					<td className="tbody-values-delete-button">
						<Button
							variant="outline-danger"
							size="sm"
							className="delete-button"
						>
							Delete
						</Button>
					</td>
					<td className="tbody-values-details-button">
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
		} of ${data.length} entries`;
	};

	return (
		<>
			{getData()}
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
			<div className="number-of-items">{numberOfItemsInEachPage()}</div>
		</>
	);
}
