import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function About() {
  return (
   
    <section className="who-we-are-page py-5 bg-light">
      <Container>
       
        <Row className="mb-4">
          <Col>
            <nav className="breadcrumb">
              <span className="text-muted"><Link to={'/'} className='text-decoration-none'>HOME</Link> &gt; WHO WE ARE</span>
            </nav>
            <h2 className="fw-bold ">About EduSphere</h2>
          </Col>
        </Row>

        
        <Row className="mb-5">
          <Col md={6}>
            <h3 className=" fw-bold">Discover EduSphere</h3>
            <p className="fs-5 text-muted">
              EduSphere is a leading institution dedicated to empowering students through academic excellence, character development, and community leadership. With a legacy of tradition and innovation, we help students grow into confident, compassionate individuals prepared for college and beyond.
            </p>
            <p className="fs-5 text-muted">
              At EduSphere, we recognize that every young man carries a unique blend of potential, curiosity, and ambition. Our programs are intentionally designed to meet these individual needs, offering a learning environment that is both challenging and nurturing. We believe that education should not only inform but also inspire—encouraging students to discover their strengths and pursue their passions with purpose.
            </p>
          </Col>
          <Col md={6}>
            <img src="/images/img1.jpg"  alt="Discover EduSphere" className="img-fluid rounded shadow-sm" />
          </Col>
        </Row>

        
        <Row className="mb-5">
          <Col md={6}>
            <img src="/images/img2.jpg" alt="EduSphere history" className="img-fluid rounded shadow-sm"/>
            
          </Col>
          <Col md={6}>
            <h3 className=" fw-bold">100 Years of Excellence</h3>
            <p className="fs-5 text-muted">
              FFor over a hundred years, EduSphere has stood as a beacon of educational excellence, shaping generations of learners through a balanced focus on academics, athletics, and personal development. Our rich history is built on a foundation of integrity, innovation, and a deep commitment to nurturing the whole student.
            </p>
            <p className="fs-5 text-muted">
                While we honor the traditions that define our identity, EduSphere is constantly evolving to meet the needs of a changing world. Our curriculum, campus life, and mentorship programs are designed to equip students with the skills, mindset, and adaptability required to thrive in college and beyond.
                At EduSphere, every student is supported with personalized guidance, structured opportunities, and a culture of encouragement. We believe that excellence is not just achieved—it’s cultivated through care, challenge, and community. Our graduates leave prepared to lead, serve, and succeed with confidence and purpose
            </p>
          </Col>
        </Row>

        
        <Row>
          <Col md={6}>
            <h3 className=" fw-bold">Designed for Boys</h3>
            <p className="fs-5 text-muted">
              At EduSphere, we recognize that every young man carries a unique blend of potential, curiosity, and ambition. Our programs are intentionally designed to meet these individual needs, offering a learning environment that is both challenging and nurturing. We believe that education should not only inform but also inspire—encouraging students to discover their strengths and pursue their passions with purpose.
            </p>
            <p className="fs-5 text-muted">Our approach is grounded in structure and support. From academic guidance to personal mentorship, we provide systems that help students stay focused, motivated, and resilient. Whether navigating rigorous coursework or developing leadership skills, our students benefit from a framework that promotes accountability while fostering independence.</p>
          </Col>
          <Col md={6}>
            <img src="/images/img3.jpg"   alt="Boys education at EduSphere" className="img-fluid rounded shadow-sm" />
            
          </Col>
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

export default About