import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from 'react-paginate'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import { createRoot } from "react-dom/client";


export default function TablePagination(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 20

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  const getData = () => {
    return currentItems.map((i) => {
      //                                                                                                                 ! Sun Jun 14 2020
      return (
        <tr>
          <td className="tbody-values-checkbox-select">
            <Form.Check type="checkbox" className="checkbox-select" />
          </td>
          <td className="tbody-values-id">{currentItems.indexOf(i) + itemOffset + 1}</td>
          <td className="tbody-values-name">{`${i.firstName} ${i.lastName}`}</td>
          <td className="tbody-values-date">{i.date}</td>
          <td className="tbody-values-country">{i.county}</td>
          <td className="tbody-values-company">{i.company}</td>
          <td className="tbody-values-date">{ (new Date(i.date).toDateString() == "Invalid Date") ?
                                               i.date : ((new Date(i.date).toDateString()).
                                               slice(4, 15)) }</td>
          <td className="tbody-values-state">{i.state}</td>
          <td className="tbody-values-status">{i.status}</td>
          <td className="tbody-values-type">{i.type}</td>
          <td className="tbody-values-button">
            <Button variant="outline-danger" size="sm" className="delete-button">Delete</Button>
          </td>
          <td className="tbody-values-edit">
            <Button variant="primary" size="sm" className="details-button">Details</Button>
          </td>
        </tr>
      );
    });
  };

  const numberOfItemsInEachPage = () => {
    return `Showing ${itemOffset + 1} to ${itemOffset + currentItems.length} of ${data.length} entries`
    
  }

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
      <div className="small-header">{numberOfItemsInEachPage()}</div>
    </>
  );
}