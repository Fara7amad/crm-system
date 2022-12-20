import React from "react";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { formatDate } from "@utils/helpers";
import { Link } from "react-router-dom";
import usePagination from "@hooks/usePagination";

export default function TablePagination(props) {
	const { data } = props;

	const { handlePageClick, currentItems, pageCount, offset } = usePagination(
		data,
		20
	);

	const getData = () => {
		return currentItems.map((client, index) => {
			return (
				<tr key={client.id}>
					<td className="tbody-values-checkbox-select">
						<Form.Check type="checkbox" className="checkbox-select" />
					</td>
					<td className="tbody-values-id">{index + 1 + offset}</td>
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
		return `Showing ${offset + 1} to ${offset + currentItems.length} of ${
			data.length
		} entries`;
	};

	return (
		<>
			{getData()}
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel="<"
				renderOnZeroPageCount={null}
				containerClassName="pagination"
				pageLinkClassName="num-of-page"
				previousLinkClassName="num-of-page"
				nextLinkClassName="num-of-page"
				activeLinkClassName="active"
			/>

			<div className="number-of-items">{numberOfItemsInEachPage()}</div>
		</>
	);
}
