import "bootstrap/dist/css/bootstrap.min.css";
import "./DataTable.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import TablePagination from "./TablePagination";

// ? install React Pagination using
// ? npm i react-paginate
// ? install React Bootstrap using
// ? npm i react-bootstrap bootstrap

const DataTable = (props) => {
  const setTh = () => {
    return (
      <tr>
        <th className="thead-values-id">ID</th>
        <th className="thead-values-name">Name</th>
        <th className="thead-values-date">Date</th>
        <th className="thead-values-country">Country</th>
        <th className="thead-values-company">Company</th>
        <th className="thead-values-type">Type</th>
        <th className="thead-values-email">Email</th>
        <th className="thead-values-button">Delete</th>
        <th className="thead-values-edit">Edit</th>
      </tr>
    );
  };

  return (
    <div className="main-holder container">
      <h1 className="header">Clients</h1>
      <div className="cont">
        <div className="container data-shower">
          <div className="header-client">
          </div>
          <div className="button-holder">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle variant="primary" className="table-buttons" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="primary" className="table-buttons">+Add New</Button>
          </div>
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