
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';


function ClientForm() {
    return (
        <div  className="col-sm-6 center">
        <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
      <MDBInput wrapperClass='mb-4' id='form6Example6' label='Country' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4'  id='form6Example6' label='Type' />
      <MDBInput wrapperClass='mb-4' type='date' id='form6Example6' label='Date' />
      



      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        label=' Confirm'
        
      />

      <MDBBtn className='mb-4 bg-dark' type='submit' block>
        Submit
      </MDBBtn>
    </form>
    </div>
    );
}

export default ClientForm;