import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaBookOpen, FaFutbol, FaUsers } from 'react-icons/fa';



function Landing() {
  return (
    <div>

      <div className="landing-page">
        <section className="hero-section text-center text-white d-flex align-items-center">
          <Container>
            <Row>
              <Col>
                <h1 className="display-3 fw-bold animate-fade-in text-secondary" >Welcome to EduSphere</h1>
                <p className="lead fs-4 animate-slide-up">
                  Inspiring excellence, leadership, and community through education.
                </p>
                <Button variant="light" size="lg" href="/about" className="mt-3 shadow-sm text-dark" >
                  Explore More
                </Button>
              </Col>
            </Row>
          </Container>
        </section>



        <div>
          <div className='d-flex m-5 justify-content-between  '>
            <div className='p-5'><img src="./images/hero.jpg" alt="" style={{ maxHeight: '300px', maxWidth: '350px' }} /></div>
            <div className='p-5'>
              <h1> EduSphere School Earns National Recognition</h1>
              <p>The School is proud to be featured on the cover of K12 Digest, celebrating our innovative approach to education. Head of School Brian D. Samual was named one of the Most Visionary Leaders in Education, recognizing EduSphere bold vision and enduring mission to prepare young men for a rapidly changing world. “At a time when many schools are grappling with how to re-engage young men, EduSphere is offering something increasingly rare: proof that a boy-centered education can work, and is working.”</p>
            </div>
          </div>
        </div>


        <section className="trinity-section py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              
              <Col md={6} className="mb-4 mb-md-0">
                <div className="p-4 bg-white shadow-sm rounded" style={{ maxwidth: "560px", maxHeight: '315' }}>
                  <h2 className=" fw-bold">Trinity of Values</h2>
                  <p className="mt-3 text-muted fs-5">
                    EduSphere empowers students to succeed in college and thrive as thoughtful, engaged citizens in a rapidly evolving and competitive world.
                    We prepare young minds to meet challenges with confidence and purpose—grounded in academics, character, and community.
                    

                  </p>
                  <Link to={'/applyform'} variant="danger"  className='btn text-dark'>Inquire Today</Link>
                </div>
              </Col>

             
              <Col md={6}>
                <div className="video-wrapper shadow-sm rounded overflow-hidden">
                  <iframe width="660" height="320" src="https://www.youtube.com/embed/H03wb1cZCSQ?si=dkR-IYr8bqmZxyR_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>


        <section className="cta bg-secondary text-white text-center py-5">
          <Container>
            <h2>Ready to Join Us?</h2>
            <h5 >Discover how your journey begins at our school.</h5>
            <Link to={'/applyform'}  variant="light" href="/admissions" className='text-dark btn'>Apply Now</Link>
          </Container>
        </section>
      </div>








    </div>
  );
}

export default Landing;