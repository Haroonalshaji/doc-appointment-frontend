import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';


function ViewDoc() {
    const [popoverModal, setPopoverModal] = useState(false);

    const toggleOpen = () => setPopoverModal(!popoverModal);

    // destructuring
    const { id } = useParams()
    console.log(id);

    const [docDetails, setDocDetails] = useState([])

    const base_url = 'https://doc-appointment-vfj1.onrender.com/doctors';
    const fetchRest = async () => {
        const result = await axios.get(`${base_url}/${id}`)
        console.log(result.data);
        setDocDetails(result.data)
    }

    useEffect(() => {
        fetchRest()
    }, [])

    console.log(docDetails);

    return (
        <div >
            <div className='container border border-primary rounded my-5' >
                <Row className='text-center m-2 p-4' style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
                    <Col className='my-3'>
                        <img style={{ width: '250px' }} src="https://cdn.icon-icons.com/icons2/2240/PNG/512/doctor_icon_134842.png" alt="" />
                        <h2 className='text-dark mt-1'>{docDetails.name} ({docDetails.specialty})</h2>
                        <h4 className='text-dark'>{docDetails.rating} <i style={{ color: '#F6C026' }} class="fa-solid fa-star"></i></h4>
                    </Col>
                    <Col>
                        <div style={{ border: '1px solid silver', borderRadius: '10px' }}>
                            <MDBListGroup style={{ opacity: '0.95' }} light>
                                <MDBListGroupItem
                                    tag='button'
                                    action
                                    noBorders
                                    active
                                    aria-current='true'
                                    type='button'
                                    className='px-3'
                                >
                                    <h2 className='text-dark text-weight-bold '>{docDetails.hospital}</h2>
                                </MDBListGroupItem>
                                <MDBListGroupItem tag='button' action type='button' className='px-3'>
                                    <i class="fa-solid fa-location-dot"></i> : {docDetails.address}
                                </MDBListGroupItem>
                                <MDBListGroupItem tag='button' action type='button' className='px-3'>
                                    <i class="fa-solid fa-phone"></i> : {docDetails.phone}
                                </MDBListGroupItem>
                                <MDBListGroupItem tag='button' action type='button' className='px-3'>
                                    <i class="fa-solid fa-envelope"></i> : {docDetails.email}
                                </MDBListGroupItem>
                                <MDBListGroupItem tag='button' action type='button' className='px-3'>
                                    <i class="fa-solid fa-clock"></i> Timing : {docDetails.available_hours}
                                </MDBListGroupItem>
                                <MDBListGroupItem tag='button' action type='button' className='px-3'>
                                    <i class="fa-solid fa-calendar-days"></i> Available Days: {docDetails.available_days?.join(' | ')}
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    {/* <DocRev rev={docDetails.reviews} /> */}
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='container   my-5 text-center' >
                <MDBBtn onClick={toggleOpen}>Patient Reviews</MDBBtn>
                <MDBModal tabIndex='-1' open={popoverModal} setOpen={setPopoverModal}>
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Patient Reviews</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>

                                <div>
                                    {docDetails.reviews?.map(item => (
                                        <MDBListGroup style={{ minWidthL: '22rem', border:'1px solid black',margin:'15px'}} light>
                                            <MDBListGroupItem>Patient Name :<b>{item.patient_name}</b></MDBListGroupItem>
                                            <MDBListGroupItem>Date :{item.date}</MDBListGroupItem>
                                            <MDBListGroupItem>Comments :{item.comments}</MDBListGroupItem>
                                            <MDBListGroupItem>Rating :{item.rating} <i class="fa-solid fa-star"></i></MDBListGroupItem>
                                            <b><hr /></b>
                                        </MDBListGroup>
                                    ))}
                                </div>

                            </MDBModalBody>

                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleOpen}>
                                    Close
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </div>
        </div>
    )
}

export default ViewDoc
