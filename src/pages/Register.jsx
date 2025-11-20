import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Register() {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) =>
        setRegisterData({ ...RegisterData, [e.target.name]: e.target.value });


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://schoolwebsite-w7bl.onrender.com/register',RegisterData)
        .then(result => console.log(result))
        .catch(err => console.log(err))
        
    }
    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>
                    <nav className="breadcrumb">
                        <span className="text-muted">
                            <Link to="/" className="text-decoration-none">HOME</Link> &gt; Register
                        </span>
                    </nav>
                    <h2 className="fw-bold">Register</h2>
                </Col>
            </Row>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} />
                </Form.Group>

                <Button type="submit">Register</Button>
            </Form>
        </Container>
    )
}

export default Register