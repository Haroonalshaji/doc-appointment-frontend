import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Cards({ doc }) {
  console.log(doc);
  return (
    <div >
      <MDBCard className='my-4 mx-3' style={{ backgroundColor: 'whitesmoke' }}>
        <MDBCardBody >
          <MDBCardTitle>{doc.hospital}</MDBCardTitle>
          <hr />
          <MDBCardTitle><b>{doc.name}</b></MDBCardTitle>
          <MDBCardSubTitle>{doc.specialty}</MDBCardSubTitle>
          <MDBCardText>
            {doc.address}
          </MDBCardText>
          <Link to={`view/${doc.id}`}>
            <MDBBtn href='#'>Book an Appointment</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default Cards
