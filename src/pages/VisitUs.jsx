import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function VisitUs() {
    return (
        <div>
            <section className="visit-us-page py-5 bg-white">
                <Container>

                    <Row className="mb-4">
                        <Col>
                            <nav className="breadcrumb">
                                <span className="text-muted"><Link to={'/'} className='text-decoration-none'>HOME</Link> &gt; VisitUs</span>
                            </nav>

                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col>
                            <h2 className="fw-bold">Visit EduSphere</h2>
                            <p className="fs-5 text-dark">
                                We welcome prospective students and families to explore our campus, meet our faculty, and experience the EduSphere community firsthand.
                            </p>
                        </Col>
                    </Row>


                    <Row className="mb-5">
                        <Col md={6} className="text-dark">
                            <h4 className="fw-bold">Campus Location</h4>
                            <p>
                                <i className="fa-solid fa-location-crosshairs me-2"></i>
                                EduSphere Academy, Kozhikode, Kerala, India
                                <br />
                                <i className="fa-solid fa-clock me-2"></i>
                                Visiting Hours: Monday to Saturday, 9:00 AM – 4:00 PM
                            </p>

                            <h4 className="mt-4 fw-bold">Contact Details</h4>
                            <p>
                                <i className="fa-solid fa-phone me-2"></i>
                                Phone: +91 85889 87888
                                <br />
                                <i className="fa-solid fa-message me-2"></i>
                                Email: <a href="mailto:admin@edusphereacademy.com">admin@edusphereacademy.com</a>
                                <br />
                                <i className="fa-solid fa-globe me-2"></i>
                                Website: <a href="https://edusphereacademy.com">edusphereacademy.com</a>
                            </p>
                        </Col>


                        <Col md={6}>
                            <div className="map-wrapper shadow-sm rounded overflow-hidden">
                                <iframe
                                    title="EduSphere Kerala Location"
                                    src="https://www.google.com/maps?q=Kozhikode,+Kerala,+India&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="d-flex gap-3 justify-content-center">
                            <Link className="btn " to="/">   Back to Home</Link>
                            <Link className="btn " to="/applyform">Apply Now</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default VisitUs