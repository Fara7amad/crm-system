import { useAddClient } from "@contexts/ClientsContext";
import { useClient, useUpdateClient } from "@contexts/ClientsContext";
import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faBuilding,
	faEarthAmericas,
	faFlag,
	faLocationDot,
	faPhone,
	faHeart,
	faGlobe,
	faLocationPin,
	faCity,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import MagicSelect from "../ui/MagicSelect";
import useLocalStorage from "@hooks/useLocalStorage";


function ClientForm({ initialValue, modify }) {
	let addClient = useAddClient();
	const updateClient = useUpdateClient();
	const handleSubmit = (client) => {
		if (modify == "add")
			addClient(client);
		else if (!modify) {updateClient(client.id, client) };

	};

	const [statuses, setStatuses] = useLocalStorage(
		"client-statuses", //key in local storage
		[
			"hot-lead",
			"cold-lead",
			"interested",
			"not-interested",
			"not-contacted",
			"contacted",
		] //
	);
	const [status, setStatus] = useState(initialValue.status);
	const [validated, setValidated] = useState(false);

	const onSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity()) {
			handleSubmit(client);
		}
		setValidated(true);
	};

	const [client, setClient] = useState(initialValue);
	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setClient({
			...client,
			[name]: value,
		});
	};

	return (
		<>
			<Form id="form" noValidate validated={validated} onSubmit={onSubmit}>
				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faUser} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={onChange}
								required
								// value={client.firstName}
								pattern="^([a-zA-Z]+\s)*[a-zA-Z]{3,}$"
								defaultValue={client.firstName}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid first name.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faUser} />
							</InputGroup.Text>
							<Form.Control
								required
								type="text"
								placeholder="Last Name"
								name="lastName"
								onChange={onChange}
								// value={client.lastName}
								pattern="^([a-zA-Z]+\s)*[a-zA-Z]{3,}$"
								defaultValue={client.lastName}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid last name.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>

				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faEnvelope} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Email"
								required
								name="email"
								onChange={onChange}
								// value={client.email}
								pattern="^[a-zA-Z0-9._-]+@[a-zA-Z.]+.[a-zA-Z]$"
								defaultValue={client.email}
								disabled={!modify}
							/>

							<Form.Control.Feedback type="invalid">
								Please provide a valid email.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faBuilding} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Company"
								name="company"
								onChange={onChange}
								// value={client.company}
								required
								pattern="^([a-zA-Z]+\s)*[a-zA-Z]{3,}$"
								defaultValue={client.company}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid company.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>

				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faEarthAmericas} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Country"
								required
								name="country"
								onChange={onChange}
								// value={client.county}
								pattern="^([a-zA-Z]+\s)*[a-zA-Z]{3,}$"
								defaultValue={client.county}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid country.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faFlag} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="State"
								required
								name="state"
								onChange={onChange}
								// value={client.state}
								pattern="^[A-Za-z]{2,2}$"
								minLength={2}
								maxLength={2}
								defaultValue={client.state}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid state.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>

				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faCity} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="City"
								required
								name="city"
								onChange={onChange}
								// value={client.city}
								minLength={3}
								pattern="^([a-zA-Z]+\s)*[a-zA-Z]{3,}$"
								defaultValue={client.city}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid city.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faLocationDot} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Address"
								required
								name="address"
								onChange={onChange}
								// value={client.address}
								pattern="^([a-zA-Z]+\s)*[a-zA-Z\s0-9]{3,}$"
								defaultValue={client.address}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid address.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>

				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						<InputGroup>
							 <InputGroup.Text>
								<FontAwesomeIcon icon={faPhone} />
							</InputGroup.Text> 
							 <Form.Control
								type="text"
								placeholder="Phone1"
								required
								name="phone1"
								onChange={onChange}
								// value={client.phone}
								pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
								defaultValue={client.phone1}
								disabled={!modify}
							/> 
						
							<Form.Control.Feedback type="invalid">
								Please provide a valid Phone.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faPhone} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Phone2"
								required
								name="phone2"
								onChange={onChange}
								// value={client.phone}
								pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
								defaultValue={client.phone2}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Phone.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>
				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						{/* <InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faHeart} />
							</InputGroup.Text> */}
						<MagicSelect
							options={statuses}
							setList={setStatuses}
							selected={status}
							setSelected={setStatus}
							disabled={!modify}
						/>
						{/* </InputGroup> */}
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faHeart} />
							</InputGroup.Text>
							<Form.Select
								// value={client.type}
								name="type"
								onChange={onChange}
								defaultValue={client.type}
								disabled={!modify}
							>
								<option value="Lead">Lead</option>
								<option value="Customer">Customer</option>
							</Form.Select>
						</InputGroup>
					</Form.Group>
				</Row>

				<Row className="mb-4 position-relative">
					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faLocationPin} />
							</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Zip"
								required
								name="zip"
								onChange={onChange}
								// value={client.zip}
								pattern="^[0-9]{5}$"
								defaultValue={client.zip}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid zip.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="6">
						<InputGroup>
							<InputGroup.Text>
								<FontAwesomeIcon icon={faGlobe} />
							</InputGroup.Text>
							<Form.Control
								type="url"
								placeholder="Website"
								required
								name="website"
								onChange={onChange}
								defaultValue={client.website}
								disabled={!modify}
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid website.
							</Form.Control.Feedback>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>
			</Form>

		</>
	);
}

export default ClientForm;
