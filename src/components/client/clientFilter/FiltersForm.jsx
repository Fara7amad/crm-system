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

  const allStateClients = [...new Set(clients.map((client) => client.state))];

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
            <Form.Select value={filters.type} onChange={onChangeType}>
              <option>Customer</option>
              <option>Lead</option>
            </Form.Select>

            <br />

            <Form.Label htmlFor="state">State</Form.Label>
            <Form.Select value={filters.state} onChange={onChangeState}>
              {allStateClients.map((state) => {
                return <option>{state}</option>;
              })}
            </Form.Select>

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
