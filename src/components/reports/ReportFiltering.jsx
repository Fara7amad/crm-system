import { useState, useEffect } from "react";
import { useClient } from "@contexts/ClientsContext";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "../reports/ReportFiltering.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const ReportFiltering = () => {
  //---------------------------Searching-------------------------------------

  const clients = useClient();
  const [filteredList, setFilteredList] = useState(clients);

  useEffect(() => {
    setFilteredList(clients);
  }, [clients]);

  const [search, setSearch] = useState("");
  const searchData = (e) => {
    if (e.target.value.trim() != "") {
      setFilteredList(
        clients.filter((user) =>
          user.company
            .toLowerCase()
            .includes(e.target.value.trim().toLowerCase())
        )
      );
    }
    setSearch(e.target.value);
  };
  //----------------------------------------------------------------asdasd

  return (
    <>
      <form action="">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            type="text"
            id="search-barReport"
            placeholder="Search"
            className="search-bar"
            value={search}
            onChange={searchData}
          />
          <br />
          <Stack direction="horizontal" gap={3}>
            <Form.Select>
              {" "}
              <option>Client</option>
              <option>Lead</option>
            </Form.Select>
          </Stack>
        </Stack>{" "}
      </form>
    </>
  );
};

export default ReportFiltering;
