import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
    return (

        <Navbar  expand="lg" className="bg-dark shadow-sm border-bottom">
            <Container>
                
                <Navbar.Brand  as={Link} to={'/'}>
                    <img  src="./images/schoolLogo.png"  alt="School Logo"width="40"className="d-inline-block align-top me-2"/>
                    
                    <span className="fw-bold text-danger text-center">EduSphere</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">

                        
                        <NavDropdown title="ABOUT" id="about-dropdown">
                            <NavDropdown.Item as={Link} to={'/about'}>Who We Are</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/about'}>Head of School</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/about'}>100 Years of School History</NavDropdown.Item>
                        </NavDropdown>

                        
                        <NavDropdown title="ADMISSIONS" id="admissions-dropdown">
                            <NavDropdown.Item as={Link} to={'/applyform'}>Apply</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/visitus'}>Visit</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ACADEMICS" id="academics-dropdown">
                            <NavDropdown.Item as={Link} to={'/programs'}>Programs</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility'}>Faculty</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="OFFICIALS" id="alumni-dropdown">
                            <NavDropdown.Item as={Link} to={'/login'}>Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/register'}>Register</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header