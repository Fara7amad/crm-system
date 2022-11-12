import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from 'react-paginate'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";



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

  const deleteFunction = (i) => {
    let index = currentItems.indexOf(i)
    console.log(index)
  }

  const getData = () => {
    return currentItems.map((i) => {
      return (
        <tr>
          <td className="tbody-values-id">{currentItems.indexOf(i) + itemOffset + 1}</td>
          <td className="tbody-values-name">{`${i.firstName} ${i.lastName}`}</td>
          <td className="tbody-values-date">{i.date}</td>
          <td className="tbody-values-country">{i.county}</td>
          <td className="tbody-values-company">{i.company}</td>
          <td className="tbody-values-type">{i.type}</td>
          <td className="tbody-values-email">{i.email}</td>
          <td className="tbody-values-button">
            <Button variant="outline-danger" onClick={deleteFunction} size="sm">Delete</Button>
          </td>
          <td className="tbody-values-edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </td>
        </tr>
      );
    });
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
    </>
  );
}