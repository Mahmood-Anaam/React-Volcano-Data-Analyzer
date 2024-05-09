// Footer.js
import React from 'react';
import { Container } from 'reactstrap';
// import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-1 mt-auto" > {/* تقليل الحشو إلى py-2 */}
    
      <Container>
        {/* <Row>
          <Col md="4">
            <h5 style={{ color: "#FFD700" }}>About Us</h5>
            <p>
              Volcano App provides accurate and comprehensive data about volcanoes globally. 
              Explore our app to learn more.
            </p>
          </Col>
          <Col md="4">
            <h5 style={{ color: "#FFD700" }}>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/volcano-list" className="text-white text-decoration-none">Volcano List</a></li>
              <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5 style={{ color: "#FFD700" }}>Contact</h5>
            <p>Email: support@volcanoapp.com</p>
            <p>Phone: +123 456 7890</p>
            <h5 style={{ color: "#FFD700" }}>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white mr-2"><FaFacebook size={20} /></a> &nbsp;
              <a href="https://twitter.com" className="text-white mr-2"><FaTwitter size={20} /></a> &nbsp;
              <a href="https://github.com" className="text-white"><FaGithub size={20} /></a>
            </div>
          </Col>
        </Row>
        <hr /> */}
        <p className="text-center" >&copy; 2024 Volcano App. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
