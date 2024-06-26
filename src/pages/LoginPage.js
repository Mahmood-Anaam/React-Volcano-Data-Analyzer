// LoginPage.js

import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("https://nodejs-express-volcanoes-restful-api.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || "error" in data) {
        setErrorMessage(data.message || "Failed to login account");
        setShowError(true);
        setShowSuccess(false);
      } else {
        localStorage.setItem("token", data["token"]);
        localStorage.setItem("token_type", data["token_type"]);
        localStorage.setItem("expires_in", data["expires_in"]);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        setSuccessMessage("Login successfully!");
        setShowSuccess(true);
        setShowError(false);

        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred during login. Please try again later."
      );
      setShowError(true);
      setShowSuccess(false);
    } finally {
      setIsLoading(false);
    }




  };

  return (
    <div style={{ minHeight: "84.5vh", width: "70%", margin: "auto" }}>
      <Container className="login-container mt-3">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="text-center">Login</h2>

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
                {successMessage}
              </Alert>
            )}

            {/* Loading Spinner */}
            {isLoading && (
              <div className="text-center mb-3">
                <Spinner color="primary" />
              </div>
            )}

            <Form onSubmit={handleLogin}>
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
              <Button color="primary" block disabled={isLoading}>
                {isLoading ? "Loging ..." : "Login"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
