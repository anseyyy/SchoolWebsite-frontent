import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function FacilityPage() {
  const facilities = [
    {
      title: 'Science & Innovation Labs',
      description: 'Modern labs equipped for physics, chemistry, and biology experiments that spark curiosity and discovery.',
      image: '/images/lab.jpg', 
    },
    {
      title: 'Library & Learning Commons',
      description: 'A quiet, resource-rich space for reading, research, and collaborative learning.',
      image: '/images/library.jpg',
    },
    {
      title: 'Sports & Recreation',
      description: 'Expansive fields and courts for football, basketball, cricket, and physical education.',
      image: '/images/sports.jpg',
    },
    {
      title: 'Digital & Tech Studios',
      description: 'Computer labs and multimedia rooms that support coding, design, and digital creativity.',
      image: '/images/tech.jpg',
    },
    {
      title: 'Auditorium & Events Hall',
      description: 'A spacious venue for assemblies, performances, and school-wide celebrations.',
      image: '/images/auditorium.jpg',
    },
    {
      title: 'Cafeteria & Dining',
      description: 'Nutritious meals served in a welcoming environment that promotes healthy habits and social connection.',
      image: '/images/cafe.jpg',
    },
  ];

  return (
    <section className="facility-page py-5 bg-light">
      <Container>

        <Row className="mb-4">
          <Col>
            <nav className="breadcrumb">
              <span className="text-muted"><Link to={'/'} className='text-decoration-none'>HOME</Link> &gt; Facilities</span>
            </nav>
            <h2 className="fw-bold ">Our Campus Facilities</h2>
          </Col>
        </Row>
        
        <Row className="g-4">
          {facilities.map((facility, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="program-card  h-100 shadow-sm border-0">
                <Card.Img className='card-img-wrapper' variant="top" src={facility.image} alt={facility.title} />
                <Card.Body>
                  <Card.Title>{facility.title}</Card.Title>
                  <Card.Text>{facility.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <h4 className="fw-bold">Ready to learn more?</h4>
            <p className="text-muted">Visit our admission page to inquire or apply for your preferred program.</p>
            <Button variant="primary" as={Link} to="/applyform">Submit an Inquiry</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FacilityPage;