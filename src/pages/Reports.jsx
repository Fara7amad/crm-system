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

  const { handlePageClick, currentItems, pageCount, classes } = usePagination(
    filteredList,
    15
  );

  console.log(clients);
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
        autoHeight
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

        <Column sortable flexGrow={1} minWidth={200}>
          <HeaderCell>Company</HeaderCell>
          <Cell dataKey="company" />
        </Column>
        <Column sortable width={200}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>
        <Column sortable width={200}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>
        <Column sortable width={140}>
          <HeaderCell>Date Added</HeaderCell>
          <Cell dataKey="date" renderCell={(data) => formatDate(data)} />
        </Column>
        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>Type</HeaderCell>
          <Cell dataKey="type" />
        </Column>
        <Column flexGrow={1} minWidth={130}>
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
          {...classes}
        />
      </div>
    </div>
  );
}

export default Reports;
