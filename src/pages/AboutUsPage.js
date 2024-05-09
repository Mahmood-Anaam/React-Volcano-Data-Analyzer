// AboutUsPage.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div style={{height:'83vh',width:'80%',margin:'auto'}}>
    <Container className="about-us-container mt-3">
      <Row>
        <Col md="12">
          <h2 className="text-center">About Volcano App</h2>
          <p className="text-center mt-4">
            Volcano App provides accurate and comprehensive data about volcanoes globally.
            Our mission is to provide reliable insights and easy access to information about volcanic activities around the world.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="6">
          <h4>Our Goals</h4>
          <ul>
            <li>Offer a comprehensive database of global volcanoes.</li>
            <li>Provide real-time updates on volcanic activities.</li>
            <li>Help researchers and enthusiasts explore volcanoes in depth.</li>
          </ul>
        </Col>
        <Col md="6">
          <h4>Contact Us</h4>
          <p>Email: support@volcanoapp.com</p>
          <p>Phone: +123 456 7890</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AboutUsPage;
