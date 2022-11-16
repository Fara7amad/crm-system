import { useState, useEffect } from "react";
import { useClient } from "@contexts/ClientsContext";
import "./FormClientFilter.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

const defaultFilters = { state: "", type: "" };

const FiltersForm = ({ filteredList, setFilterList }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const clients = useClient();
  const onChangeState = (e) => {
    setFilters((prev) => {
      return { ...prev, state: e.target.value };
    });
  };

  const onChangeType = (e) => {
    setFilters((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  const onClickAll = () => {
    setFilterList(clients);
    setFilters(defaultFilters);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let filtered = [...clients];

    if (filters.type)
      filtered = [...filtered.filter((client) => client.type == filters.type)];

    if (filters.state)
      filtered = [
        ...filtered.filter((client) => client.state == filters.state),
      ];

    setFilterList(filtered);
  };

  return (
    <div>
      {" "}
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle
          variant="primary"
          className="table-buttons"
          id="dropdown-basic"
        >
          Filter
        </Dropdown.Toggle>
        <Dropdown.Menu className="form">
          <form onSubmit={onSubmit}>
            <Form.Label htmlFor="type">Type</Form.Label>
            <Form.Control
              value={filters.type}
              onChange={onChangeType}
              type="text"
              id="type"
              aria-describedby="passwordHelpBlock"
            />
            <br />
            <Form.Label htmlFor="state">State</Form.Label>
            <Form.Control
              value={filters.state}
              onChange={onChangeState}
              type="text"
              id="state"
              aria-describedby="passwordHelpBlock"
            />
            <br />
            <div className="divBtn">
              <Button type="submit" className="btn-submit">
                Submit
              </Button>{" "}
              <Button
                type="button"
                onClick={onClickAll}
                className="btn-all"
                variant="outline-danger"
              >
                Reset
              </Button>
            </div>
          </form>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FiltersForm;
