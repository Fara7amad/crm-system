import "bootstrap/dist/css/bootstrap.min.css";
import "./DataTable.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import TablePagination from "./TablePagination";
import Form from 'react-bootstrap/Form';

// ? install React Pagination using
// ? npm i react-paginate
// ? install React Bootstrap using
// ? npm i react-bootstrap bootstrap

const DataTable = (props) => {
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
        <th className="thead-values-button">Delete</th>
        <th className="thead-values-edit">Details</th>
      </tr>
    );
  };

  return (
    <div className="main-holder container">
      <h1 className="header-h1">Clients</h1>
      <div className="cont">
        <div className="container data-shower">
          <div className="header-client">
          </div>
          <div className="button-holder">
            <Button variant="primary" className="table-buttons">+Add New</Button>
          </div>
          <Form.Control
            type="text"
            id="search-bar"
            placeholder="Search"
            className="search-bar"
          />
          <Table responsive="sm" className="table-holder">
            <thead>
              {setTh()}
            </thead>
            <tbody>
              <TablePagination data={props.data} />
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;