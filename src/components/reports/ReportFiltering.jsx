import { useState } from "react";
import { useClient } from "@contexts/ClientsContext";

import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { DEFAULT_CLIENT_STATUSES } from "@data/client";
import useLocalStorage from "@hooks/useLocalStorage";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const ReportFiltering = ({ setFilteredList, filteredList }) => {
  const clients = useClient();

  const [statuses] = useLocalStorage(
    "client-statuses",
    DEFAULT_CLIENT_STATUSES
  );
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const onChangeSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    let list = [...clients];
    if (search) {
      list = list.filter((client) =>
        client.company.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (form.get("type")) {
      list = list.filter((client) => client.type === form.get("type"));
    }
    if (form.get("status")) {
      list = list.filter((client) => client.status === form.get("status"));
    }
    if (dateFrom) {
      list = list.filter((client) => client.date >= dateFrom);
    }
    if (dateTo) {
      list = list.filter((client) => client.date <= dateTo);
    }

    setFilteredList(list);
  };

  return (
    <>
      <Form onSubmit={handleFilter} className="mb-3">
        <Row className="gy-2 align-items-stretch">
          <Col xs={12} xl={6} className="align-self-stretch">
            <Form.Control
              type="text"
              placeholder="Search Company"
              className="h-100"
              value={search}
              onChange={onChangeSearch}
            />
          </Col>

          <Col xs={12} xl={6}>
            <Stack
              direction="horizontal"
              gap={1}
              className="align-items-stretch"
            >
              <Form.Select name="type">
                <option value="">Type</option>
                <option value="Customer">Customer</option>
                <option value="Lead">Lead</option>
              </Form.Select>

              <Form.Select name="status" className="text-capitalize">
                <option value="">Status</option>
                {statuses.map((status) => (
                  <option
                    className="text-capitalize"
                    key={status}
                    value={status}
                  >
                    {status.split("-").join(" ")}
                  </option>
                ))}
              </Form.Select>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="From"
                  value={dateFrom}
                  onChange={(newValue) => {
                    setDateFrom(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField fullWidth size="small" {...params} />
                  )}
                />

                <DatePicker
                  label="To"
                  value={dateTo}
                  onChange={(newValue) => {
                    setDateTo(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField fullWidth size="small" {...params} />
                  )}
                />
              </LocalizationProvider>
              <Button type="submit">Filter</Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ReportFiltering;
