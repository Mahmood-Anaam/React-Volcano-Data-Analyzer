// RegisterPage.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Spinner,
} from "reactstrap";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://volcanoes-restful-api.onrender.com/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || "error" in data) {
        setErrorMessage(data.message || "Failed to register account");
        setShowError(true);
        setShowSuccess(false);
      } else {
        setSuccessMessage("Account successfully created!");
        setShowSuccess(true);
        setShowError(false);

        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred during registration. Please try again later."
      );
      setShowError(true);
      setShowSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "84.5vh", width: "70%", margin: "auto" }}>
      <Container className="register-container mt-3">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="text-center">Create Account</h2>

            {/* Display Error or Success Alerts */}
            {showError && (
              <Alert
                color="danger"
                isOpen={showError}
                toggle={() => setShowError(false)}
              >
                {errorMessage}
              </Alert>
            )}
            {showSuccess && (
              <Alert
                color="success"
                isOpen={showSuccess}
                toggle={() => setShowSuccess(false)}
              >
                {successMessage}. Click <Link to="/login">here to log in</Link>.
              </Alert>
            )}

            {/* Loading Spinner */}
            {isLoading && (
              <div className="text-center mb-3">
                <Spinner color="primary" />
              </div>
            )}

            <Form onSubmit={handleRegister}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  required={true}
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
                  required={true}
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
                  required={true}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" block disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
