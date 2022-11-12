
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
  } from 'mdb-react-ui-kit';

function ClientForm() {
    return (
        <div  className="col-sm-6 center">
        <form>
      <MDBRow className='mb-4'>
      <MDBInput wrapperClass='mb-4' id='id' label='Client ID' />
        <MDBCol>
          <MDBInput id='Fname' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='Lname' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='cname' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='address' label='Address' />
      <MDBInput wrapperClass='mb-4' id='country' label='Country' />
      <MDBInput wrapperClass='mb-4' type='email' id='email' label='Email' />
      <MDBInput wrapperClass='mb-4'  id='type' label='Type' />
      <MDBInput wrapperClass='mb-4' type='date' id='data' label='Date' />
      



      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        label=' Confirm'
        
      />

    </form>
    </div>
    );
}

export default ClientForm;