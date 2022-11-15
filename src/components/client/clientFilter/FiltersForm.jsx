import { useState, useEffect } from "react";
import { useClient } from "@contexts/ClientsContext";
import "./FormClientFilter.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const defaultFilters = { state: "", type: "" };

const FormFilterDrop = ({ filteredList, setFilterList }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const clients = useClient();
  const onChangeState = (e) => {
    setFilters((currentState) => {
      return { ...currentState, state: e.target.value };
    });
  };

  const onChangeType = (e) => {
    setFilters((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  const onClickAll = () => {
    setFilterList(clients);
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

    // alert(JSON.stringify(form, null, 4));
  };

  return (
    <div className="dropdown">
      {" "}
      <form>
        <Form.Label htmlFor="inputPassword5">Type</Form.Label>
        <Form.Control
          onChange={onChangeType}
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">State</Form.Label>
        <Form.Control
          onChange={onChangeState}
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <br />
        <div className="divBtn">
          <Button type="submit" onClick={onSubmit} className="btn-submit">
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
    </div>
  );
};

export default FormFilterDrop;
