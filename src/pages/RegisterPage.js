// RegisterPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // تحقق من مطابقة كلمة المرور
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // أضف هنا الكود الخاص بإجراء تسجيل الحساب
    console.log(`Registering with Email: ${email}, Password: ${password}`);
  };

  return (
    <Container className="register-container">
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center">Create Account</h2>
          <Form onSubmit={handleRegister}>
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
            <FormGroup>
              <Label for="confirm-password">Confirm Password</Label>
              <Input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" block>Create Account</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
