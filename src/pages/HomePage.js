// HomePage.js
import React from 'react';
import { Container, Button } from 'reactstrap';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="hero-image">
      <Container className="text-center hero-content">
        <h1>Welcome to Volcano App</h1>
        <p>Explore volcanoes of the world and gain insights!</p>
        <Button color="primary" href="/volcano-list" className="m-2">Explore Volcano List</Button>
        <Button color="secondary" href="/register" className="m-2">Create Account</Button>
      </Container>
    </div>
  );
};

export default HomePage;
