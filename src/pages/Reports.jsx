import "rsuite-table/dist/css/rsuite-table.css";

import { useState } from "react";
import { useClient } from "@contexts/ClientsContext";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import usePagination from "@hooks/usePagination";

import { formatDate } from "@utils/helpers";
import ReactPaginate from "react-paginate";
import ReportFiltering from "@components/reports/ReportFiltering";

function Reports() {
	const clients = useClient();
	const [filteredList, setFilteredList] = useState(clients);
	const [sortType, setSortType] = useState("asc");

	const { handlePageClick, currentItems, pageCount } = usePagination(
		filteredList,
		20
	);

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
			<ReportFiltering
				setFilteredList={setFilteredList}
				filteredList={filteredList}
			/>

			<Table
				data={currentItems}
				sortType={sortType}
				onSortColumn={handleSortColumn}
				height={660}
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
				<Column sortable flexGrow={1} minWidth={250}>
					<HeaderCell>Company</HeaderCell>
					<Cell dataKey="company" />
				</Column>
				<Column sortable flexGrow={1} minWidth={200}>
					<HeaderCell>First Name</HeaderCell>
					<Cell dataKey="firstName" />
				</Column>
				<Column sortable flexGrow={1} minWidth={200}>
					<HeaderCell>Last Name</HeaderCell>
					<Cell dataKey="lastName" />
				</Column>
				<Column sortable>
					<HeaderCell>Date Added</HeaderCell>
					<Cell dataKey="date" renderCell={(data) => formatDate(data)} />
				</Column>
				<Column>
					<HeaderCell>Type</HeaderCell>
					<Cell dataKey="type" />
				</Column>
				<Column width={150}>
					<HeaderCell>Status</HeaderCell>
					<Cell
						className="text-capitalize"
						dataKey="status"
						renderCell={(status) => status.split("-").join(" ")}
					/>
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

export default Reports;
