import { useState, useEffect } from "react";
import { useClient } from "@contexts/ClientsContext";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";

import { formatDate } from "@utils/helpers";
import ReactPaginate from "react-paginate";

function Reports() {
	const clients = useClient();
	const [filteredList, setFilteredList] = useState(clients);
	const [sortType, setSortType] = useState("asc");

	const { handlePageClick, currentItems, pageCount } =
		usePagination(filteredList);

	const handleSortColumn = (key, sortType) => {
		if (key != "date")
			setFilteredList((prev) => [
				...prev.sort((a, b) =>
					sortType == "asc"
						? a[key].localeCompare(b[key])
						: b[key].localeCompare(a[key])
				),
			]);
		else
			setFilteredList((prev) => [
				...prev.sort((a, b) =>
					sortType == "asc" ? a[key] - b[key] : b[key] - a[key]
				),
			]);
		setSortType(sortType == "asc" ? "desc" : "asc");
	};

	return (
		<div>
			<Table
				data={currentItems}
				sortType={sortType}
				onSortColumn={handleSortColumn}
				height={500}
				virtualized
			>
				<Column>
					<HeaderCell>ID</HeaderCell>
					<Cell
						dataKey="id"
						renderCell={(id) =>
							filteredList.findIndex((client) => client.id === id) + 1
						}
					/>
				</Column>
				<Column sortable width={180} flexGrow={1}>
					<HeaderCell>Company</HeaderCell>
					<Cell dataKey="company" />
				</Column>
				<Column sortable flexGrow={1}>
					<HeaderCell>Date Added</HeaderCell>
					<Cell dataKey="date" renderCell={(data) => formatDate(data)} />
				</Column>
				<Column flexGrow={1}>
					<HeaderCell>Type</HeaderCell>
					<Cell dataKey="type" />
				</Column>
				<Column flexGrow={1}>
					<HeaderCell flexGrow={1}>Status</HeaderCell>
					<Cell dataKey="status" />
				</Column>
			</Table>

			<div className="mt-2">
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
					containerClassName="pagination justify-content-center"
					activeClassName="active"
				/>
			</div>
		</div>
	);
}

const itemsPerPage = 20;

function usePagination(data) {
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(data.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(data.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, data]);

	const handlePageClick = (e) => {
		const newOffset = (e.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	};

	return {
		handlePageClick,
		currentItems,
		pageCount,
	};
}

export default Reports;
