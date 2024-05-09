// LoginPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // أضف هنا الكود الخاص بإجراء تسجيل الدخول
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
  };

  return (
    <div style={{minHeight:'85vh',width:'70%',margin:'auto'}}>
    <Container className="login-container mt-3">
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" block>Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default LoginPage;
