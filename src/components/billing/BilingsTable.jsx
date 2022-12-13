import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { formatDate } from "@utils/helpers";

export const getDataOfList = (dataList) => {};
const BilingsTable = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

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
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const bodyOfTable = () => {
    return currentItems.map((client) => {
      return (
        <tr>
          <td className="tbody-values-id">{client.Id}</td>
          <td className="tbody-values-company">{client.Company}</td>
          <td className="tbody-values-company">{client.Title}</td>
          <td className="tbody-values-date">{formatDate(client.Date)}</td>
          <td className="tbody-values-status">{client.Status}</td>
          <td className="tbody-values-edit">
            <Button variant="primary" size="sm" className="details-button">
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
      <div className="container data-shower">
        <Table responsive="sm" className="table-holder">
          <thead>{setHeaderOfTable()}</thead>
          <tbody>{bodyOfTable()}</tbody>
        </Table>
      </div>
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
      <div className="small-header">{numberOfItemsInEachPage()}</div>
    </>
  );
};
export default BilingsTable;
