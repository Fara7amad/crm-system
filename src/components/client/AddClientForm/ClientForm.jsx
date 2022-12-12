import { useAddClient } from "@contexts/ClientsContext"
import React, { useState } from 'react';
function ClientForm() {

  let addClient = useAddClient();
  const handleSubmit = (client) => {
    addClient(client)
  };

  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    city: '',
    phone: '',
    county: '',
    email: '',
    type: '',
    state: '',
    zip: '',
    website: '',
  })
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setClient({
      ...client, [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(client);
    clearState();
  }
  const clearState = () => {
    setClient({
      firstName: '',
      lastName: '',
      company: '',
      address: '',
      city: '',
      phone: '',
      county: '',
      email: '',
      type: '',
      state: '',
      zip: '',
      website: '',
    });
  }
  return (
    <form className="row g-4 " onSubmit={onSubmit}  >
      <div className="col-md-6 position-relative">
        <input type="text" className="form-control" name='firstName' onChange={onChange} value={client.firstName} placeholder='First name' required />
      </div>
      <div className="col-md-6 position-relative">
        <input type="text" className="form-control" name='lastName' onChange={onChange} value={client.lastName} placeholder='Last name' required />
      </div>
      <div className="col-md-12 position-relative">
        <input type="email" className="form-control" name='email' onChange={onChange} value={client.email} aria-describedby="validationTooltipUsernamePrepend" placeholder='email' required />

      </div>
      <div className="col-md-12 position-relative">
        <input type="text" className="form-control" name='company' onChange={onChange} value={client.company} aria-describedby="validationTooltipUsernamePrepend" placeholder='Company name' required />
      </div>
      <div className="col-md-12 position-relative">
        <input type="text" className="form-control" name='city' onChange={onChange} value={client.city} placeholder='City' required />
      </div>
      <div className="col-md-12 position-relative">
        <input type="text" className="form-control" name='address' onChange={onChange} value={client.address} placeholder='Address' required />

      </div>
      <div className="col-md-12 position-relative">
        <input type="text" className="form-control" name='county' onChange={onChange} value={client.county} placeholder='Country' required />

      </div>
      <div className="col-md-12 position-relative">
        <input type="number" className="form-control" name='phone' onChange={onChange} value={client.phone} placeholder='Phone' required />

      </div>
      <div className="col-md-12 position-relative">
        <input type="text" className="form-control" name='state' onChange={onChange} value={client.state} placeholder='State' required />
      </div>
      <div className="col-md-12 position-relative">
        <input type="text" className="form-control" name='type' onChange={onChange} value={client.type} placeholder='Type' required />
      </div>

      <div className="col-md-12 position-relative">
        <input type="number" className="form-control" name='zip' onChange={onChange} value={client.zip} placeholder='Zip' required />
      </div>
      <div className="col-md-12 position-relative">
        <input type="url" className="form-control" name='website' onChange={onChange} value={client.website} placeholder='Website' required />
      </div>
      <div className="col-12 modal-footer">
        <div>
          <button type="submit" className="btn btn-primary form-button"  >Submit</button>

        </div>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </form>
  );
}


export default ClientForm;
