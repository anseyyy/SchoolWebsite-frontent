import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ApplyForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/report', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', grade: '', message: '' }); 
      console.log('success');
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  
  useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => {
         navigate('/about')
        }, 3000);
    return () => clearTimeout(timer);
  }
}, [submitted, navigate]);

  return (
    <section className="apply-form-page py-5 bg-light">
      <Container>

        <Row className="mb-4">
          <Col>
            <nav className="breadcrumb">
              <span className="text-muted"><Link to={'/'} className='text-decoration-none'>HOME</Link> &gt; Addmission</span>
            </nav>
            <h2 className="fw-bold ">Student Admission Inquiry</h2>
          </Col>
        </Row>


        
        {submitted && <Alert variant="success">Your application has been submitted!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder='Enter Full Name' name="name" required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder='Enter Email' name="email" required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder='Enter Phone Number'  name="phone" required onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Grade Applying For</Form.Label>
                <Form.Control type="text" placeholder='Enter Grade' name="grade" required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit Application</Button>
        </Form>
      </Container>
    </section>
  );
}

export default ApplyForm