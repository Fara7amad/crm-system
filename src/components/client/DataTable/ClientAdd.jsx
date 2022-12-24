// import { useAddClient } from "@contexts/ClientsContext";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
// import InputGroup from "react-bootstrap/InputGroup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faUser,
// 	faBuilding,
// 	faEarthAmericas,
// 	faFlag,
// 	faLocationDot,
// 	faPhone,
// 	faHeart,
// 	faGlobe,
// 	faLocationPin,
// 	faCity,
// 	faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
import ClientForm from "../ClientForm";


function ClientAdd() {
	// let addClient = useAddClient();
	// const handleSubmit = (client) => {
	//  	addClient(client);
	// };
    
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const [validated, setValidated] = useState(false);
	// const onSubmit = (event) => {
	// 	const form = event.currentTarget;
	// 	event.preventDefault();
	// 	if (form.checkValidity()) {
	// 		handleSubmit(client);
	// 		handleClose();
	// 	}
	// 	setValidated(true);
	// };
const values={
firstName: "",
lastName: "",
company: "",
address: "",
city: "",
phone1: "",
phone2: "",
county: "",
email: "",
type: "Lead",
state: "",
zip: "",
website: "",
status: "",
    
}
	// const [client, setClient] = useState({
	// 	firstName: "",
	// 	lastName: "",
	// 	company: "",
	// 	address: "",
	// 	city: "",
	// 	phone: "",
	// 	county: "",
	// 	email: "",
	// 	type: "Lead",
	// 	state: "",
	// 	zip: "",
	// 	website: "",
	// });
	// const onChange = (e) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	setClient({
	// 		...client,
	// 		[name]: value,
	// 	});
	// };
    
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				+ Add Client
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				animation={false}
				backdrop="static"
				centered
				size="lg"
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Client</Modal.Title>
				</Modal.Header>
				<Modal.Body>
                    <ClientForm 
                    initialValue={values}
                    modify="add" />
					{/* <Form noValidate validated={validated} onSubmit={onSubmit}>
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
										value={client.firstName}
										pattern="^[A-Za-z]{3,10}$"
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
										value={client.lastName}
										pattern="^[A-Za-z]{3,10}$"
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
										value={client.email}
										pattern="^[a-zA-Z0-9._-]+@[a-zA-Z.]+.[a-zA-Z]$"
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
										value={client.company}
										required
										pattern="^[A-Za-z ]{3,15}$"
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
										name="county"
										onChange={onChange}
										value={client.county}
										pattern="^[A-Za-z ]{4,15}$"
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
										value={client.state}
										pattern="^[A-Za-z]{2,2}$"
										minLength={2}
										maxLength={2}
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
										value={client.city}
										minLength={3}
										pattern="^[A-Za-z]{3,10}$"
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
										value={client.address}
										pattern="^[A-Za-z0-9 ]{3,10}$"
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
										placeholder="Phone"
										required
										name="phone"
										onChange={onChange}
										value={client.phone}
										pattern="^[+][0-9]{10,12}$"
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
										<FontAwesomeIcon icon={faHeart} />
									</InputGroup.Text>
									<Form.Select
										value={client.type}
										name="type"
										onChange={onChange}
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
										value={client.zip}
										pattern="^[0-9]{5}$"
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
										value={client.website}
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid website.
									</Form.Control.Feedback>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Row>

						<Modal.Footer>
							<Button type="submit">Done</Button>
							<Button type="button" variant="secondary" onClick={handleClose}>
								close
							</Button>
						</Modal.Footer>
					</Form> */}
                    <Modal.Footer>
							 <Button form="form" type="submit">Done</Button>
							<Button type="button" variant="secondary" onClick={handleClose}>
								close
							</Button>
						</Modal.Footer>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ClientAdd;
