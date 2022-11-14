import { useState, useEffect } from "react";
import { useClient } from "@contexts/ClientsContext";
import "./client/FormClientFilter.css";

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
    console.log("true");
    setFilterList(clients);
    console.log(clients);
    console.log(filteredList, "FilerList");
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
    console.log(filtered);
    setFilterList(filtered);

    // alert(JSON.stringify(form, null, 4));
  };

  return (
    <div className="dropdown">
      {" "}
      <form onSubmit={onSubmit}>
        <button
          id="ddrop"
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <input
              type="text"
              placeholder="Type"
              value={filters.type}
              onChange={onChangeType}
            />
          </li>
          <hr />
          <li>
            <input
              type="text"
              placeholder="Stats"
              value={filters.state}
              onChange={onChangeState}
            />
          </li>

          <hr />
          <li>
            {/* <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label"
              htmlFor="flexCheckDefault"
              onChange={onClickAll}
            >
              Default checkbox
            </label> */}
            <button className="All" type="button" onClick={onClickAll}>
              All Clients
            </button>
          </li>

          <hr />
          <li>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </li>
        </ul>
      </form>
      <hr />
      <h2>
        {filters.type}|{filters.state}
      </h2>
      <div>
        <ul>
          {filteredList.map((client) => (
            <li>
              {client.firstName} | {client.type} |{client.state}|
              {client.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormFilterDrop;
