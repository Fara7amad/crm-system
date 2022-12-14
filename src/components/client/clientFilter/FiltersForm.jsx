import { useState, useEffect } from "react";
import { useClient } from "@contexts/ClientsContext";
import "./FormClientFilter.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { Stack } from "react-bootstrap";

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
			<Dropdown>
				<Dropdown.Toggle variant="primary">Filter</Dropdown.Toggle>

				<Dropdown.Menu className="form">
					<form onSubmit={onSubmit}>
						<Form.Label htmlFor="type">Type</Form.Label>
						<Form.Select value={filters.type} onChange={onChangeType}>
							<option value="">Type</option>
							<option value="Customer">Customer</option>
							<option value="Lead">Lead</option>
						</Form.Select>

						<br />

						<Form.Label htmlFor="state">State</Form.Label>
						<Form.Select value={filters.state} onChange={onChangeState}>
							<option value="">State</option>
							{allStateClients.map((state) => {
								return <option>{state}</option>;
							})}
						</Form.Select>

						<br />

						<Stack direction="horizontal" gap={1}>
							<Button type="submit" className="btn-submit">
								Submit
							</Button>

							<Button
								type="button"
								onClick={onClickAll}
								variant="outline-danger"
							>
								Reset
							</Button>
						</Stack>
					</form>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default FiltersForm;
