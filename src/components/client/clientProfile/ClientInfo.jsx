import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useClient, useUpdateClient } from "@contexts/ClientsContext";
import ClientForm from '../ClientForm';


function ClientInfo() {

    // const [statuses, setStatuses] = useLocalStorage(
    //     "client-statuses", //key in local storage
    //     [
    //         "hot-lead",
    //         "cold-lead",
    //         "interested",
    //         "not-interested",
    //         "not-contacted",
    //         "contacted",
    //     ] //
    // );
    
    const { id } = useParams();
    const clients = useClient();
    let clientCurrent = clients.find(client => { return client.id === id });

    // const [Info, setInfo] = useState(clientCurrent);
  
    // const [status, setStatus] = useState(Info.status);

    const [isEditable, setisEditable] = useState(false);

    const updateState = () => {
        setisEditable(!isEditable);
        // if (isEditable) {
        //     handleSubmit(Info);
        // }
    }

    // const updateClient = useUpdateClient();

    // const handleSubmit = (Info) => {
    //     updateClient(Info.id, Info);
    // };

    // const handleChange = (event) => {
    //     let value = event.target.value;
    //     let name = event.target.name;
    //     setInfo(Info => ({
    //         ...Info,
    //         [name]: value,
    //     }));
    // };

    return (
        <> 
         <Row className="mb-4">
                 <Col>
                     <h2> Client Info</h2></Col>
                 <Col>
                     <Button form="form" type='submit'
                         onClick={updateState} id="btn-edit">
                         {isEditable ? 'Save' : 'Edit'}
                     </Button>
                 </Col>
             </Row>

        <ClientForm 
        initialValue={clientCurrent}
        modify={isEditable}
        /></>
       
        // <section className="col-mb-6 center" >
        //     <Row className="mb-4">
        //         <Col>
        //             <h2> Client Info</h2></Col>
        //         <Col>
        //             <Button
        //                 onClick={updateState} id="btn-edit">
        //                 {isEditable ? 'Save' : 'Edit'}
        //             </Button>
        //         </Col>
        //     </Row>
        //     <form>
        //         <Row className='mb-4'>

        //             <Col>
        //                 <label>First Name</label> <br></br>
        //                 <input id='Fname' name="firstName" onChange={handleChange} disabled={!isEditable} defaultValue={Info.firstName} />
        //             </Col>

        //             <Col>
        //                 <label>Last Name</label> <br></br>
        //                 <input id='Lname' name="lastName" onChange={handleChange} disabled={!isEditable} defaultValue={Info.lastName} />
        //             </Col>
        //         </Row>
        //         <Col>
        //                 <label>status </label> <br></br>
                        
        //                 <MagicSelect
		// 				options={statuses}
		// 				setList={setStatuses}
		// 				selected={status}
		// 				setSelected={setStatus}
		// 			/>

        //             </Col>
        //         <Row className='mb-4'>
        //             <Col>
        //                 <label>Company</label> <br></br>
        //                 <input wrapperClass='mb-4' id='cname' name="company" onChange={handleChange} disabled={!isEditable} defaultValue={Info.company} />
        //             </Col>
        //             <Col>
        //                 <label>Address</label> <br></br>
        //                 <input wrapperClass='mb-4' id='address' name="address" onChange={handleChange} disabled={!isEditable} defaultValue={Info.address} />
        //             </Col>
        //         </Row>

        //         <Row className='mb-4'>
        //             <Col>
        //                 <label>Country</label> <br></br>
        //                 <input wrapperClass='mb-4' id='country' name="country" onChange={handleChange} disabled={!isEditable} defaultValue={Info.county} />
        //             </Col>
        //             <Col>
        //                 <label>City</label> <br></br>
        //                 <input wrapperClass='mb-4' id='city' name="city" onChange={handleChange} disabled={!isEditable} defaultValue={Info.city} />
        //             </Col>
        //             <Col>
        //                 <label>state</label> <br></br>
        //                 <input wrapperClass='mb-4' id='state ' name="state" onChange={handleChange} disabled={!isEditable} defaultValue={Info.state} />
        //             </Col>
        //             <Col>
        //                 <label>zip</label> <br></br>
        //                 <input wrapperClass='mb-4' id='zip' name="zip" onChange={handleChange} disabled={!isEditable} defaultValue={Info.zip} />
        //             </Col>
        //         </Row>

        //         <Row className='mb-4'>
        //             <Col>
        //                 <label>Phone number 1</label> <br></br>
        //                 <input wrapperClass='mb-4' id='p1' name="phone1" onChange={handleChange} disabled={!isEditable} defaultValue={Info.phone1} />
        //             </Col>
        //             <Col>
        //                 <label>Phone number 2</label> <br></br>
        //                 <input wrapperClass='mb-4' id='p2' name="phone2" onChange={handleChange} disabled={!isEditable} defaultValue={Info.phone2} />
        //             </Col>
        //         </Row>
        //         <Row className='mb-4'>
        //             <Col>
        //                 <label>Email</label> <br></br>
        //                 <input wrapperClass='mb-4' type='email' id='email' name="email" onChange={handleChange} disabled={!isEditable} defaultValue={Info.email} />
        //             </Col>
        //             <Col>
        //                 <label>Website</label> <br></br>
        //                 <input wrapperClass='mb-4' type='website' id='website' name="website" onChange={handleChange} disabled={!isEditable} defaultValue={Info.website} />
        //             </Col>
        //         </Row>
        //         <Row className='mb-4'>
        //             <Col>
        //                 <label>Type </label> <br></br>

        //                 <select defaultValue={Info.type} name="type" onChange={handleChange} disabled={!isEditable}>
        //                     <option >Customer</option>
        //                     <option >Lead</option>

        //                 </select>

        //             </Col>
        //             <Col>
        //                 <label>Number of projects</label> <br></br>
        //                 <input wrapperClass='mb-4' id='projects' name="projects_count" onChange={handleChange} disabled={!isEditable} defaultValue={Info.projects_count} />
        //             </Col>
        //             <Col>
        //                 <label>Date added</label> <br></br>
        //                 <input wrapperClass='mb-4' id='date' defaultValue={formatDate(Info.date)} disabled />
        //             </Col>
                   
        //         </Row>

        //     </form>
        // </section >
    );

}


export default ClientInfo;