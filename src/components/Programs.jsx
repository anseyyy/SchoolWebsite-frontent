import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'




function Programs() {
    const programs = [
    {
      title: 'STEM Excellence',
      description: 'Hands-on learning in science, technology, engineering, and mathematics to prepare future innovators.',
      image: '/images/science1.jpg',
    },
    {
      title: 'Arts & Expression',
      description: 'Visual arts, music, and drama programs that nurture creativity and self-expression.',
      image: '/images/arts.jpg',
    },
    {
      title: 'Humanities & Leadership',
      description: 'Courses in history, literature, and ethics that build critical thinking and global awareness.',
      image: '/images/speech.jpeg',
    },
    {
      title: 'Character & Community',
      description: 'Programs focused on personal growth, service, and leadership within and beyond the classroom.',
      image: '/images/arts2.jpg',
    },
  ];


  return (
    <section className="programs-page py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <nav className="breadcrumb">
              <span className="text-muted">
                <Link to="/" className="text-decoration-none">HOME</Link> &gt; Programs
              </span>
            </nav>
            <h2 className="fw-bold display-6 ">Explore Our Academic Programs</h2>
            <p className="text-muted">Each program is designed to inspire, challenge, and empower students to grow with purpose.</p>
          </Col>
        </Row>



        
        <Row className="g-4">
          {programs.map((program, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="program-card h-100 shadow-sm border-0">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={program.image} alt={program.title} />
                  <div className="img-overlay"></div>
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold">{program.title}</Card.Title>
                  <Card.Text>{program.description}</Card.Text>
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

  )
}

export default Programs