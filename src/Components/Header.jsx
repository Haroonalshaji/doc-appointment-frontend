import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';


function Header({setQuery}) {
    const [openNav, setOpenNav] = useState(false);
   
    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                        <img
                            src='https://img.freepik.com/premium-vector/making-appointment-with-doctor-flat-concept-vector-illustration_151150-12192.jpg'
                            height='40'
                            alt=''
                            loading='lazy'
                        />
                        Doc Appointment
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNav}>
                        <MDBNavbarNav>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Appointments</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
                            </MDBNavbarItem>
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" onChange={e => setQuery(e.target.value)} aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header
